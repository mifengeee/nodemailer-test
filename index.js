const express = require("express");
const app = express();
const nodemailer = require("nodemailer");


app.get("/sendMail",(req,res) => {
    // 第一步
    let transporter = nodemailer.createTransport({
        service:"qq",  //  邮箱
        secure:true,    //  安全的发送模式
        auth:{
            user:"719043997@qq.com", //  全局变量
            pass:"syxchgapphllbedh"//  授权码
        }
    })
    // 第二步
    let mailOptions = {
        from:"719043997@qq.com",
        to:"274005538@qq.com",
        subject:"测试title",
        text:"测试message"
    }
    // 第三步
    transporter.sendMail(mailOptions,(err,data) => {
        if(err){
            console.log(err);
            res.json({status:400,msg:"send fail....."})
        }else{
            console.log(data);
            res.json({status:200,msg:"邮件发送成功....."})
        }
    })

})
app.listen(3000,() => {
    console.log("服务开启在3000端口...");
})