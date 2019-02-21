$(function)(){
  //(1) 用户名不能为空, 长度为2-6位
         // (2) 密码不能为空, 长度为6-12位
//进行表单校验初始化
$('#form').bootstrapValidator({
  //配置图标
  feedbackIcons:{
    valid:'glyphicon glyphicon-ok',
    invalid:'glyphicon glyphicon-remove',
    validating:'glyphicon glyphicon-refresh'
  },
//字段列表使用:field,要现在name属性
fields:{
  username:{
    //使用表单校验
    validators:{
      notEmpty:{
    //提示信息
    message:'用户名不能为空'
      },
    //长度校验:在2到6位数字之间
    stringLength: {
      min: 6,
      max: 30,
      message: '请输入2到6位有效数字'
    },
    password{
  
    }

    }
  }
//密码部分

}
}

})
}