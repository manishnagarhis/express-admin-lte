module.exports = {
    dashboardView : async (req,res)=>{
        res.render('admin/dashboard',{
            title:"Dashboard Page"
        })
    }
}