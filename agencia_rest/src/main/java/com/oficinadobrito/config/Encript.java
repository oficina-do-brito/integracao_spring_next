package com.oficinadobrito.config;

import at.favre.lib.crypto.bcrypt.BCrypt;

public class Encript {

        // String password = "1234";                                                                    -> cria uma passord para dar exemplo
		// String bcryptHashString = BCrypt.withDefaults().hashToString(12, password.toCharArray());    -> faz um hash com 12 caracteres da password
		//                       $2a$12$US00g/uMhoSBm.HiuieBjeMtoN69SN.GE25fCpldebzkryUyopws6
		// 	...
		// BCrypt.Result result = BCrypt.verifyer().verify(password.toCharArray(), bcryptHashString);   -> verifica se é veridica a senha passando a password e o hash do banco
		// result.verified == true

    public static boolean descrypt(String password,String hash){
        BCrypt.Result result = BCrypt.verifyer().verify(password.toCharArray(), hash);
		if(result.verified){
			return true;
		}
        return false;
    }
    public static String encrypt(String password){
        return BCrypt.withDefaults().hashToString(12, password.toCharArray());
    }
    
}