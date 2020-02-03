exports.success= function(req, res, messsage, status){
    res.status(status || 200). send({
        error: '',
        body: messsage
    });
}


exports.error = function(req, res, messsage, status, details){
    console.error('[response error]'+ details)
    res.status(status|| 500).send({
        error: messsage,
        body: '',
    })
}