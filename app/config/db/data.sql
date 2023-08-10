//Base de datos creada como en xampp
create DATABASE usersdb collate 'utf8_general_ci';


create table USERS (
    ID int not null primary key auto_increment;
    PRODUCTOS varchar(50) not null unique,
);

ALTER TABLE users ADD COLUMN bebida VARCHAR(50);


//spInsertProducto
DROP PROCEDURE `spInsertProducto`(IN `_PRODUCTOS` VARCHAR(50), IN `_BEBIDA` VARCHAR(50)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER BEGIN INSERT INTO USERS ( PRODUCTOS, BEBIDA ) VALUES ( _PRODUCTOS, _BEBIDA ); END

//spFindAllProducto
DROP PROCEDURE `spFindAllProducto`() NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER BEGIN SELECT ID, PRODUCTOS, BEBIDA FROM USERS; END

//SpFindProducto
DROP PROCEDURE `SpFindProducto`(IN `_ID` INT) NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER BEGIN SELECT ID, PRODUCTOS, BEBIDA FROM USERS WHERE ID = _ID; END

//spUpdateProducto
DROP PROCEDURE `spUpdateProducto`(IN `_ID` INT, IN `_PRODUCTOS` VARCHAR(50), IN `_BEBIDA` VARCHAR(50)) NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER BEGIN UPDATE USERS SET PRODUCTOS=_PRODUCTOS, BEBIDA=_BEBIDA WHERE ID = _ID; END

//spDeleteProducto
DROP PROCEDURE `spDeleteProducto`(IN `_ID` INT) NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER BEGIN DELETE FROM USERS WHERE ID = _ID; END


