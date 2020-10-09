const express = require("express");
const app = express();
const nodemailer = require("nodemailer");


app.get("/sendMail",(req,res) => {
    // 第一步
    let transporter = nodemailer.createTransport({
        service:"qq",   //  邮箱类型 如果用163 就填163
        secure:true,    //  安全的发送模式
        auth:{
            user:"111111111@qq.com", //  全局变量
            pass:"***********"       //  IMAP/SMTP授权码
        }
    })
    // 第二步
    let mailOptions = {
        from:"1111111111@qq.com",   //发件人邮箱
        to:"2222222222@qq.com",     //收件人邮箱
        subject:"测试title",        //邮件标题
        text:"测试message"          //邮件正文
    }
    // 第三步
    transporter.sendMail(mailOptions,(err,data) => {
        if(err){
            console.log(err);
            res.json({status:400,msg:"发送失败！"})
        }else{
            console.log(data);
            res.json({status:200,msg:"邮件发送成功啦！"})
        }
    })

})
app.listen(3000,() => {
    console.log("服务开启在3000端口");
})