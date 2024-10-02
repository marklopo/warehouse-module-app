package example.magasyst.abstractClass;

import java.util.List;

import example.magasyst.main.authentication.Authorities;
import example.magasyst.main.authentication.Users;
import example.magasyst.main.user.Employees;

public abstract class Person {

	public List<Employees> getAllEmp() {
		return null;
	}

	public Employees addEmp(Employees employee) {

		return null;
	}

	public Employees getSingleEmp(int id) {

		return null;
	}

	public Employees deleteEmp(int id) {

		return null;
	}

	public Employees editEmp(Employees employee, int id) {

		return null;
	}

	public Employees getSingleEmp2(String username) {

		return null;
	}

	public List<Users> getAllUsers() {

		return null;
	}

	public Users getSingleUser(String username) {

		return null;
	}

	public Users deleteUser(String username) {

		return null;
	}

	public Users editUser(Users user, String username) {

		return null;
	}

	public Users getSingleUser(String username, String password) {

		return null;
	}

	public Users addUser(Users user) {

		return null;
	}

	public Authorities deleteAuth(String username) {

		return null;
	}

	public Authorities editUser(Authorities auth, String username) {

		return null;
	}

	public Authorities getSingleAuth(String username) {

		return null;
	}

	public Authorities addAuth(Authorities auth) {

		return null;
	}

	public List<Authorities> getAllAuth() {

		return null;
	}
}
