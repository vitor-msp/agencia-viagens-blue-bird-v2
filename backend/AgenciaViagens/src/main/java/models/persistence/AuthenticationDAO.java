package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import models.Client;

public class AuthenticationDAO {
	
	public static Client authentication(Client clientToAuth) {
		
		String sql = "SELECT C.id_cli FROM Cliente C"
				+ " WHERE C.email = ? AND C.senha = ?;";
		PreparedStatement pstm = null;
		Connection con = null;
		ResultSet rset = null;
		Client client = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setString(1, clientToAuth.getEmail());
				pstm.setString(2, clientToAuth.getPassword());
				rset = pstm.executeQuery();
				
				if(rset.next()) {
					client = new Client();
					client.setId(rset.getInt("id_cli"));
				}
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do authentication! - " + error);
		}finally{
			try {
				if(rset != null) {
					rset.close();
				}
				if(pstm != null) {
					pstm.close();
				}
				if(con != null) {
					con.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return client;
	}
}