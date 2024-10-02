package example.magasyst.main.security;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@EnableCaching
@Configuration
@EnableWebSecurity
@ComponentScan("com")
public class HttpSec {
	@Autowired
	private UsersDetailsService detailsService;
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration corsConf = new CorsConfiguration();
		corsConf.setAllowedOrigins(List.of("http://localhost:4200", "http://localhost:4200/**/**"));
		corsConf.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		corsConf.setAllowCredentials(true);
		corsConf.setAllowedHeaders(List.of("*"));
		corsConf.setMaxAge(3600L);
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConf);
		return source;
	}

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http

				.cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer
						.configurationSource(corsConfigurationSource()))

				.sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.csrf(csrf -> csrf.disable()).authorizeHttpRequests((authorize) ->

				authorize.requestMatchers(HttpMethod.GET, "/emp").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/single/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/single2/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/single-auth/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/single-equipment/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/inspection").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/equipment").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/single-inspection/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/users").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/single-users/{username}/{password}").hasAnyRole("ADMIN","USER")
						.requestMatchers(HttpMethod.GET, "/auth").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.GET, "/single-auth/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.PUT, "/update-users/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.PUT, "/update/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.PUT, "/update-auth/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.PUT, "/update-inspection/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.PUT, "/update-equipment/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.PUT, "/update-auth/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.DELETE, "/delete-users/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.DELETE, "/delete/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.DELETE, "/delete-inspection/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.DELETE, "/delete-equipment/{id}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.DELETE, "/delete-auth/{username}").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.POST, "/add-inspection").hasAnyRole("ADMIN","USER")
						.requestMatchers(HttpMethod.POST, "/add-equipment").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.POST, "/add-users").hasAnyRole("ADMIN")
						.requestMatchers(HttpMethod.POST, "/add-auth").hasAnyRole("ADMIN")
						.requestMatchers("/login").permitAll().anyRequest().authenticated()
										)
			.httpBasic(Customizer.withDefaults());

		return http.build();

	}
	
	

	



	public AuthenticationManager authenticationManager(
			UserDetailsService userDetailsService,
			PasswordEncoder passwordEncoder) {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(detailsService);
		authenticationProvider.setPasswordEncoder(new BCryptPasswordEncoder());
		
		return new ProviderManager(authenticationProvider);
	}
	@Bean 
	UserDetailsService userDetailsService() {
		return new UsersDetailsService();
	}
	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(userDetailsService());
		provider.setUserDetailsService(userDetailsService());
		provider.setPasswordEncoder(new BCryptPasswordEncoder());
		
		return provider;
	}
	


protected void configure(AuthenticationManagerBuilder auth) throws Exception{
	auth.authenticationProvider(authenticationProvider());
}
	

    @Bean
	public
PasswordEncoder passwordEncoder() {
return new BCryptPasswordEncoder();
	}

    @Bean
    public CacheManager createSimpleCacheManager() {
        SimpleCacheManager simpleCacheManager = new SimpleCacheManager();
        List<Cache> caches = new ArrayList<>(20);
        caches.add(new ConcurrentMapCache("getAllUnitsUs"));
        caches.add(new ConcurrentMapCache("getSingleUnitIdUs"));
        caches.add(new ConcurrentMapCache("getSingleUnitStringUs"));
        caches.add(new ConcurrentMapCache("getAllUnitsEq"));
        caches.add(new ConcurrentMapCache("getSingleUnitIdEq"));
        caches.add(new ConcurrentMapCache("getSingleUnitStringEq"));
        caches.add(new ConcurrentMapCache("getAllUnitsInsp"));
        caches.add(new ConcurrentMapCache("getSingleUnitIdInsp"));
        caches.add(new ConcurrentMapCache("getSingleUnitStringInsp"));
        caches.add(new ConcurrentMapCache("getAllUnitsEmp"));
        caches.add(new ConcurrentMapCache("getSingleUnitIdEmp"));
        caches.add(new ConcurrentMapCache("getSingleUnitStringEmp"));
        caches.add(new ConcurrentMapCache("getAllUnitsAu"));
        caches.add(new ConcurrentMapCache("getSingleUnitIdAu"));
        caches.add(new ConcurrentMapCache("getSingleUnitStringAu"));
        simpleCacheManager.setCaches(caches);
        return simpleCacheManager;
      
    }
}