// import connection
import db from "../config/db.js";

// get all user
export const getAllUsers = (result) => {
    db.query("SELECT userID,userfirst,userLast,Gender,userRole,email,Password,userProfile FROM Users", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
export const getUserById= (data,result) => {
    db.query("SELECT userfirst,userLast,Gender,userRole,email,Password,userProfile FROM Users WHERE userId= ?",[data], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// get single user email 
export const getUserByEmail= (data,result) => {
    db.query("SELECT userID,userfirst,userLast,Gender,userRole,Password,userProfile FROM Users WHERE email = ?",[data], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// insert User
export const updateUser = (data, id, result) => {
    db.query("UPDATE Users SET  userfirst = ?, userLast = ?, Gender= ?, userRole= ?, email = ?, Password = ?, userProfile = ?   WHERE UserID = ?", [ data.userfirst, data.userLast, data.Gender, data.userRole, data.email, data.Password, data.userProfile,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
            console.log("Movie Details was updated Successfully");
        }
    });   
}



// insert User
export const DeleteUser = (data,result) => {
    db.query("delete from Users where userID= ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,result);
            alert('Are you sure');
        }
    });
};
