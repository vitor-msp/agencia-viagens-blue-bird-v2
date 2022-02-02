package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;

import models.Pack;

public class PurchaseDAO {
	
	public static boolean createPurchase(Pack pack) {
		
		boolean ret = false;
		String sql = "INSERT INTO Adquire (cliente, viagem, promocao)"
				+ " VALUES (?, ?, ?);";
		PreparedStatement pstm = null;
		Connection con = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {
				pstm = con.prepareStatement(sql);
				pstm.setInt(1, pack.getClient().getId());
				pstm.setInt(2, pack.getTrip().getId());
				Integer offer = pack.getOffer().getId();
				if(offer == null) {
					pstm.setNull(3, 0);					
				}else {					
					pstm.setInt(3, offer);					
				}
				
				pstm.executeUpdate();
				ret = true;
			}
		}catch(Exception error) {
			System.out.println("Erro na execução do createPurchase! - " + error);
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
//	
//	public static Client getClient(int id) {
//		
//		String sql = "SELECT C.id_cli, C.nome, C.rg, C.cpf, C.dt_nasc, C.email"
//				+ " FROM Cliente C"
//				+ " WHERE C.id_cli = ?";
//		
//		PreparedStatement pstm = null;
//		Connection con = null;
//		ResultSet rset = null;
//		Client client = null;
//		
//		try {
//			con = ConnectionFactory.getConnection();
//			if(con != null && !con.isClosed()) {				
//				pstm = con.prepareStatement(sql);
//				pstm.setInt(1, id);
//				rset = pstm.executeQuery();
//				
//				if(rset.next()) {
//					client = new Client();
//					client.setId(rset.getInt("id_cli"));
//					client.setName(rset.getString("nome"));
//					client.setRg(rset.getString("rg"));
//					client.setCpf(rset.getString("cpf"));
//					client.setBirthDate(rset.getString("dt_nasc"));
//					client.setEmail(rset.getString("email"));
//				}
//			}
//		}catch(Exception error) {
//			System.out.println("Erro na execução do getClient! - " + error);
//		}finally{
//			try {
//				if(rset != null) {
//					rset.close();
//				}
//				if(pstm != null) {
//					pstm.close();
//				}
//				if(con != null) {
//					con.close();
//				}
//			}catch(Exception e) {
//				e.printStackTrace();
//			}
//		}
//		return client;
//	}
//	
//	public static boolean updateClient(Client client) {
//		
//		boolean ret = false;
//		String sql = "UPDATE Cliente SET nome = ?, rg = ?, cpf = ?, dt_nasc = ?"
//				+ " WHERE Cliente.id_cli = ?;";
//		PreparedStatement pstm = null;
//		Connection con = null;
//		
//		try {
//			con = ConnectionFactory.getConnection();
//			if(con != null && !con.isClosed()) {				
//				pstm = con.prepareStatement(sql);
//				pstm.setString(1, client.getName());
//				pstm.setString(2, client.getRg());
//				pstm.setString(3, client.getCpf());
//				pstm.setString(4, client.getBirthDate());
//				pstm.setInt(5, client.getId());
//				pstm.executeUpdate();
//				ret = true;
//			}
//		}catch(Exception error) {
//			System.out.println("Erro na execução do updateClient! - " + error);
//		}finally{
//			try {
//				if(pstm != null) {
//					pstm.close();
//				}
//				if(con != null) {
//					con.close();
//				}
//			}catch(Exception e) {
//				e.printStackTrace();
//			}
//		}
//		return ret;
//	}
//	
//	public static boolean setPassword(Client client) {
//		
//		boolean ret = false;
//		String sql = "UPDATE Cliente SET Cliente.senha = ? WHERE Cliente.id_cli = ?;";
//		PreparedStatement pstm = null;
//		Connection con = null;
//		
//		try {
//			con = ConnectionFactory.getConnection();
//			if(con != null && !con.isClosed()) {				
//				pstm = con.prepareStatement(sql);
//				pstm.setString(1, client.getNewPassword());
//				pstm.setInt(2, client.getId());
//				pstm.executeUpdate();
//				ret = true;
//			}
//		}catch(Exception error) {
//			System.out.println("Erro na execução do setPassword! - " + error);
//		}finally{
//			try {
//				if(pstm != null) {
//					pstm.close();
//				}
//				if(con != null) {
//					con.close();
//				}
//			}catch(Exception e) {
//				e.printStackTrace();
//			}
//		}
//		return ret;
//	}
}
