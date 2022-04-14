module.exports = {
    listView : async (req,res)=>{
        res.render('admin/user/userListView',{
            title:"User list"
        })
    },
    createUserView : async (req,res)=>{
        res.render('admin/user/createUserView',{
            title:"Add user"
        })
    }
}