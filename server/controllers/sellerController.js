import jwt from 'jsonwebtoken';

//seller logn:/api/seller/login
export const sellerLogin = async(req,res)=>{
    try {
        const {email,password}=req.body;

    if(password===process.env.SELLER_PASSWORD && email===process.env.SELLER_EMAIL){
        const token =  jwt.sign({email},process.env.JWT_SECRET, {expiresIn:'7d'});

        res.cookie('sellerToken', token, {
            httpOnly:true, //prevent js to access cookie
            secure: process.env.NODE_ENV==='production', //use secure cookie in production
            sameSite: process.env.NODE_ENV==='production' ?'none' : 'strict', //CSRF protection
            maxAge: 7*24*60*1000, 
        });

        return res.json({success:true,message:"Logged In"});
    }else{
        return res.json({success:false,message:"Invalid Credentials"});
    }
    } catch (error) {
        console.log(error.message);
        res.json({success:false , message: error.message});
    }
}

//check auth:/api/seller/is-auth
export const isSellerAuht = async (req, res) => {
    try {
        
        return res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

//logout selller : /api/seller/logout
export const sellerLogout = async(req,res)=>{
    try {
        res.clearCookie('sellerToken',{
            httpOnly:true,
            secure: process.env.NODE_ENV==='production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({success:true , message:"Logged Out"})
    } catch (error) {
        console.log(error.message);
        res.json({success:false , message: error.message});
    }
}