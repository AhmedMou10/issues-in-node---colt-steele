// const express = require('express');
import express from 'express';
const app = express();
import path from 'path';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})


app.listen(3030, () => {
    console.log("listening on port 3030")
})