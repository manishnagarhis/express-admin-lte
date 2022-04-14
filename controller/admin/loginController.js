module.exports = {
    loginView : async (req,res)=>{
        res.render('admin/login',{
            title:"Login Page"
        })
    }
}