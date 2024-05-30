package com.configuration;

import ch.qos.logback.classic.Logger;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtTokenUtil{

	Logger logger = (Logger) LoggerFactory.getLogger(JwtTokenUtil.class);


    private static String SECRET_KEY="ZXF1aXBtZW50c291dGhmb3J0Y3J5bW9udGhhbnlib2R5YnJpZGdlYWN0aXZlY2FyZWY=";


    public String extractUsername(String token) {
    	Claims claims=extractAllClaims(token);
        String userEmail = claims.getSubject();
        return userEmail;
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(String useremail){
    	Map<String,Object> claims = new HashMap<>();
        return createToken(claims, useremail);
    }


    public String createToken(Map<String, Object> extraClaims, String useremail){
        return Jwts
                .builder()
                .setSubject(useremail)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ 1000 * 60 *24))
                .signWith(SignatureAlgorithm.HS256, getSigningKey())
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        logger.info("username in jwtservice ", username);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
    	Claims claims=extractAllClaims(token);
        Date expiration = claims.getExpiration();
        return expiration;
    }


    private Claims extractAllClaims(String token){
    	Claims claims;
        try {
            claims = Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
        	logger.error("Could not get all claims Token from passed token");
            claims = null;
        }
        return claims;
    }

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);

    }

}
