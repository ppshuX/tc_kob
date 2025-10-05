package com.tc_kob.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

@Configuration
public class WebSocketConfig {

    @Bean
    @Profile("!test")
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}