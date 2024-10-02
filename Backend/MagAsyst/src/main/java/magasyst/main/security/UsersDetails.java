package example.magasyst.main.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.regex.Pattern;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import example.magasyst.main.authentication.Users;

public class UsersDetails implements UserDetails {


	private static final long serialVersionUID = 1L;

	public UsersDetails(Users users) {
		super();
		this.users = users;
	}

	private Users users;

	@Override
	public String getPassword() {

		return users.getPassword();
	}

	@Override
	public String getUsername() {

		return users.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;

	}

	@Override
	public boolean isAccountNonLocked() {

		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {

		return true;
	}

	@Override
	public boolean isEnabled() {

		return users.isEnabled();

	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		boolean found = findAuth();
		String role = "ROLE_USER";
		if (found == true) {
			role = "ROLE_ADMIN";
		}
		List<GrantedAuthority> listRole = new ArrayList<GrantedAuthority>();
		listRole.add(new SimpleGrantedAuthority(role));
		return listRole;
	}

	public boolean findAuth() {
		String auth = "ROLE_ADMIN";
		String response = users.getAuthority().toString();

		Pattern pat = Pattern.compile("\\b" + auth + "\\b");
		return pat.matcher(response).find();

	}
}
