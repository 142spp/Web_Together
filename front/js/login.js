function login_submit(){
    const id = $('#account_id')[0].value;
    const password = $('#account_password')[0].value;
    if(id=="") message = "아이디를 입력하세요";
    else if(password=="") message = "패스워드를 입력하세요";
    else message = "성공적입니다.";
    console.log(id);
    alert(message);
}
