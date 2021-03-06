package models.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import models.Client;

public class ClientDAO {
	
	public static boolean createClient(Client client) throws Exception{
		
		boolean ret = false;
		String sql = "INSERT INTO Cliente (nome, rg, cpf, dt_nasc, email, senha)"
				+ " VALUES (?, ?, ?, CONVERT(?, DATE), ?, ?);";
		PreparedStatement pstm = null;
		Connection con = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setString(1, client.getName());
				pstm.setString(2, client.getRg());
				pstm.setString(3, client.getCpf());
				pstm.setString(4, client.getBirthDate());
				pstm.setString(5, client.getEmail());
				pstm.setString(6, client.getPassword());
				pstm.executeUpdate();
				ret = true;
			}
		}catch(Exception error) {
			System.out.println("Erro na execu??o do createClient! - " + error);
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
	
	public static Client getClient(Client clientToGet) throws Exception{
		
		String sql = "SELECT C.id_cli, C.nome, C.rg, C.cpf, C.dt_nasc, C.email"
				+ " FROM Cliente C"
				+ " WHERE C.id_cli = ?";
		
		PreparedStatement pstm = null;
		Connection con = null;
		ResultSet rset = null;
		Client client = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setInt(1, clientToGet.getId());
				rset = pstm.executeQuery();
				
				if(rset.next()) {
					client = new Client();
					client.setId(rset.getInt("id_cli"));
					client.setName(rset.getString("nome"));
					client.setRg(rset.getString("rg"));
					client.setCpf(rset.getString("cpf"));
					client.setBirthDate(rset.getString("dt_nasc"));
					client.setEmail(rset.getString("email"));
				}
			}
		}catch(Exception error) {
			System.out.println("Erro na execu??o do getClient! - " + error);
			throw error;
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
	
	public static boolean updateClient(Client client) throws Exception{
		
		boolean ret = false;
		String sql = "UPDATE Cliente SET nome = ?, rg = ?, cpf = ?, dt_nasc = ?"
				+ " WHERE Cliente.id_cli = ?;";
		PreparedStatement pstm = null;
		Connection con = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setString(1, client.getName());
				pstm.setString(2, client.getRg());
				pstm.setString(3, client.getCpf());
				pstm.setString(4, client.getBirthDate());
				pstm.setInt(5, client.getId());
				pstm.executeUpdate();
				ret = true;
			}
		}catch(Exception error) {
			System.out.println("Erro na execu??o do updateClient! - " + error);
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
	
	public static boolean setPassword(Client client) throws Exception{
		
		boolean ret = false;
		String sql = "UPDATE Cliente SET Cliente.senha = ? WHERE Cliente.id_cli = ?;";
		PreparedStatement pstm = null;
		Connection con = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setString(1, client.getNewPassword());
				pstm.setInt(2, client.getId());
				pstm.executeUpdate();
				ret = true;
			}
		}catch(Exception error) {
			System.out.println("Erro na execu??o do setPassword! - " + error);
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
	
	public static boolean checkEmail(Client client) throws Exception{
		
		boolean ret = false;
		String sql = "SELECT C.id_cli FROM Cliente C WHERE "
				+ "C.email = BINARY ?;";
		
		PreparedStatement pstm = null;
		Connection con = null;
		ResultSet rset = null;
		
		try {
			con = ConnectionFactory.getConnection();
			if(con != null && !con.isClosed()) {				
				pstm = con.prepareStatement(sql);
				pstm.setString(1, client.getEmail());
				rset = pstm.executeQuery();
				
				if(!rset.next()) {
					ret = true;
				}
			}
		}catch(Exception error) {
			System.out.println("Erro na execu??o do checkEmail! - " + error);
			throw error;
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
		return ret;
	}
}
