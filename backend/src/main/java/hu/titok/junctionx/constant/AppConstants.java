package hu.titok.junctionx.constant;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

public class AppConstants {
    private AppConstants() {}

    public static final String APP_BASE_URL =
            ServletUriComponentsBuilder.fromCurrentContextPath().build().toUriString();
    public static final String FRONTEND_BASE_URL = "http://localhost:3000";
}
