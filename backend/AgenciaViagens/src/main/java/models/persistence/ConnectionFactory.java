package models.persistence;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionFactory {
	private static final String USERNAME = "root";
	private static final String PASSWORD = "";
	private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/agenciaviagens";
	private static Connection con = null;
	
	private ConnectionFactory() {}
	
	private static void connectToDB() throws Exception {
		try {
			con = DriverManager.getConnection(DATABASE_URL,USERNAME,PASSWORD);
			if(con != null) {
				System.out.println("Banco de dados conectado! - " + con);
			}
		}catch(Exception error) {
			System.out.println("Erro na conexão com o banco de dados! - " + error);
			throw error;
		}
	}
	
	public static Connection getConnection() throws Exception {
		if(con == null || con.isClosed()){
			connectToDB();
		}
		return con;
	}
}
