
function login_submit() {
    const id = $('#account_id')[0].value;
    const password = $('#account_password')[0].value;
    if (id == "" || password == "") {
        message = "입력하지 않은 부분이 있습니다."
        alert(message);
        return;
    }
    fetch('http://', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            account_id: id,
            account_password: password,
        }),
    })
    .then(response => response.json())
    .then(result => {
        if (result.message === 'SUCCESS') {
            alert('Success');
        }else {
            alert('Failure');
        }
    });
}
