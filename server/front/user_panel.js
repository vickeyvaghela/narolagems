const route = require('express').Router();
const sql = require("mssql");
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options:{encrypt:false},
    port:parseInt(process.env.DB_PORT)
};



route.get('/', (req, res) => {
    res.send('default route for userpanel FRONT');
});


route.post('/test', (req, res) => {
    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        console.log(req.body.UserId);
        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.input('Clarity_Code', sql.VarChar(30), '1,2');
        request.input('Col_Code', sql.VarChar(30), '5');
        //request.input('PAGENAME', sql.VarChar(30), req.body.PAGENAME);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_DiamondResult_Kendo_NEW_Event').then(function (recordsets, returnValue, affected) {

            console.log('user id',req.body.UserId);

            //console.log(JSON.stringify(recordsets));
            if(recordsets){
                let countt = recordsets.recordset.length;
                res.json({success: true,message:countt+' Stones found', data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/myOrders', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);

        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.input('StatusType', sql.VarChar(30),req.body.StatusType);
        request.execute('WB_ConfirmOrderDisplay').then(function (recordsets, returnValue, affected) {
            if (recordsets && recordsets.recordsets && recordsets.recordsets[0]) {
                res.json({success: true, data: recordsets.recordsets[0]})
            } else {
                res.json({success: true, data: []})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/savedsearch', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.execute('WB_SaveSearchDisplay').then(function(recordsets, returnValue, affected) {
            //console.log(JSON.stringify(recordsets));

            if(recordsets && recordsets.recordsets && recordsets.recordsets[0]){
                res.json({success:true,data:recordsets.recordsets[0]})
            }else{
                res.json({success:true,data:[]})
            }
            conn.close();
        }).catch(function(err11) {
            console.log('err11 ',err11);
            res.json({success:true,data:[]})
            conn.close();
        });
    }).catch(function (err22) {
        console.log('err22 ',err22);
        res.json({success:true,data:[]})
    });


});


route.post('/newstones', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        request.input('UserId', sql.VarChar(30), req.body.UserId);
        //request.input('PAGENAME', sql.VarChar(30), req.body.PAGENAME);
        request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_GetStoneCountUser').then(function (recordsets, returnValue, affected) {
            //console.log('user id',req.body.UserId);

            if(recordsets && recordsets.output && recordsets.output['']){
                res.json({success: true, data: recordsets.output['']})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/get_page_count', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        request.input('UserId', sql.VarChar(30), req.body.UserId);
        //request.input('PAGENAME', sql.VarChar(30), req.body.PAGENAME);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_GetStoneCount').then(function (recordsets, returnValue, affected) {

            console.log('user id',req.body.UserId);

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset[0]})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

module.exports = route;

