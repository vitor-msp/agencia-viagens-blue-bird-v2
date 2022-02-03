package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;

import models.Contact;

public class ContactDAO {
	
	public static boolean createContact(Contact contact) throws Exception{
		
		boolean ret = false;
		String sql = "INSERT INTO Contato (email, assunto, corpo)"
				+ " VALUES (?, ?, ?);";
		PreparedStatement pstm = null;
		Connection con = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setString(1, contact.getEmail());
				pstm.setString(2, contact.getSubject());
				pstm.setString(3, contact.getBody());
				pstm.executeUpdate();
				ret = true;
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do createContact! - " + error);
			throw error;
		}finally{
			try {
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
		return ret;
	}
}
