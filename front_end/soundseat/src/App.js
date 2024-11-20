import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import FeaturedEvent from './componentes/featuredEvent';
import UpcomingEvents from './componentes/upcomingEvents';
import EventDetails from './componentes/eventDetails';
import SeatSelection from './componentes/seatSelection';
import PurchaseTickets from './componentes/purchaseTickets';

// EVENTOS DESTACADOS Y PRÓXIMOS (Mock Data)
const mockFeaturedEvents = [
  {
    id: 1,
    title: 'Tour 2024',
    artist: 'Grupo Marrano',
    description: 'Un increíble concierto de la banda más sonada en México.',
    date: '11/12/2024',
    time: '20:00',
    longDescription: 'Grupo Marrano es una banda de rock alternativo originaria de México, conocida por su estilo irreverente y su fusión de géneros. Durante este concierto, el público podrá disfrutar de los mayores éxitos de la banda, así como de algunas canciones inéditas. Prepárate para una noche llena de energía, guitarras poderosas y una puesta en escena impresionante que te hará cantar y bailar durante todo el evento.',
    image: '/grupo_marrano.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/gpomarrano' },
      { icon: 'twitter', url: 'https://x.com/marranooficial?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/gpomarrano?igsh=a2VlbWo5bW5jaGw=' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P11', status: 'occupied' }, { id: 'P21', status: 'occupied' }, { id: 'P31', status: 'occupied' }],
          [{ id: 'P2', status: 'available' }, { id: 'P12', status: 'available' }, { id: 'P22', status: 'occupied' }, { id: 'P32', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P13', status: 'available' }, { id: 'P23', status: 'occupied' }, { id: 'P33', status: 'occupied' }],
          [{ id: 'P4', status: 'available' }, { id: 'P14', status: 'available' }, { id: 'P24', status: 'occupied' }, { id: 'P34', status: 'occupied' }],
          [{ id: 'P5', status: 'available' }, { id: 'P15', status: 'available' }, { id: 'P25', status: 'occupied' }, { id: 'P35', status: 'occupied' }],
          [{ id: 'P6', status: 'available' }, { id: 'P16', status: 'available' }, { id: 'P26', status: 'occupied' }, { id: 'P36', status: 'occupied' }],
          [{ id: 'P7', status: 'available' }, { id: 'P17', status: 'available' }, { id: 'P27', status: 'occupied' }, { id: 'P37', status: 'occupied' }],
          [{ id: 'P8', status: 'available' }, { id: 'P18', status: 'available' }, { id: 'P28', status: 'occupied' }, { id: 'P38', status: 'occupied' }],
          [{ id: 'P9', status: 'available' }, { id: 'P19', status: 'available' }, { id: 'P29', status: 'occupied' }, { id: 'P39', status: 'occupied' }],
          [{ id: 'P10', status: 'available' }, { id: 'P20', status: 'available' }, { id: 'P30', status: 'occupied' }, { id: 'P40', status: 'occupied' }]
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA21', status: 'occupied' }, { id: 'TA41', status: 'occupied' }, { id: 'TA61', status: 'occupied' }],
          [{ id: 'TA2', status: 'available' }, { id: 'TA22', status: 'available' }, { id: 'TA42', status: 'occupied' }, { id: 'TA62', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA23', status: 'available' }, { id: 'TA43', status: 'occupied' }, { id: 'TA63', status: 'occupied' }],
          [{ id: 'TA4', status: 'available' }, { id: 'TA24', status: 'available' }, { id: 'TA44', status: 'occupied' }, { id: 'TA64', status: 'occupied' }],
          [{ id: 'TA5', status: 'available' }, { id: 'TA25', status: 'available' }, { id: 'TA45', status: 'occupied' }, { id: 'TA65', status: 'occupied' }],
          [{ id: 'TA6', status: 'available' }, { id: 'TA26', status: 'available' }, { id: 'TA46', status: 'occupied' }, { id: 'TA66', status: 'occupied' }],
          [{ id: 'TA7', status: 'available' }, { id: 'TA27', status: 'available' }, { id: 'TA47', status: 'occupied' }, { id: 'TA67', status: 'occupied' }],
          [{ id: 'TA8', status: 'available' }, { id: 'TA28', status: 'available' }, { id: 'TA48', status: 'occupied' }, { id: 'TA68', status: 'occupied' }],
          [{ id: 'TA9', status: 'available' }, { id: 'TA29', status: 'available' }, { id: 'TA49', status: 'occupied' }, { id: 'TA69', status: 'occupied' }],
          [{ id: 'TA10', status: 'available' }, { id: 'TA30', status: 'available' }, { id: 'TA50', status: 'occupied' }, { id: 'TA70', status: 'occupied' }],
          [{ id: 'TA11', status: 'available' }, { id: 'TA31', status: 'available' }, { id: 'TA51', status: 'occupied' }, { id: 'TA71', status: 'occupied' }],
          [{ id: 'TA12', status: 'available' }, { id: 'TA32', status: 'available' }, { id: 'TA52', status: 'occupied' }, { id: 'TA72', status: 'occupied' }],
          [{ id: 'TA13', status: 'available' }, { id: 'TA33', status: 'available' }, { id: 'TA53', status: 'occupied' }, { id: 'TA73', status: 'occupied' }],
          [{ id: 'TA14', status: 'available' }, { id: 'TA34', status: 'available' }, { id: 'TA54', status: 'occupied' }, { id: 'TA74', status: 'occupied' }],
          [{ id: 'TA15', status: 'available' }, { id: 'TA35', status: 'available' }, { id: 'TA55', status: 'occupied' }, { id: 'TA75', status: 'occupied' }],
          [{ id: 'TA16', status: 'available' }, { id: 'TA36', status: 'available' }, { id: 'TA56', status: 'occupied' }, { id: 'TA76', status: 'occupied' }],
          [{ id: 'TA17', status: 'available' }, { id: 'TA37', status: 'available' }, { id: 'TA57', status: 'occupied' }, { id: 'TA77', status: 'occupied' }],
          [{ id: 'TA18', status: 'available' }, { id: 'TA38', status: 'available' }, { id: 'TA58', status: 'occupied' }, { id: 'TA78', status: 'occupied' }],
          [{ id: 'TA19', status: 'available' }, { id: 'TA39', status: 'available' }, { id: 'TA59', status: 'occupied' }, { id: 'TA79', status: 'occupied' }],
          [{ id: 'TA20', status: 'available' }, { id: 'TA40', status: 'available' }, { id: 'TA60', status: 'occupied' }, { id: 'TA80', status: 'occupied' }]
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB21', status: 'occupied' }, { id: 'TAB1', status: 'occupied' }, { id: 'TB61', status: 'occupied' }],
          [{ id: 'TB2', status: 'available' }, { id: 'TB22', status: 'available' }, { id: 'TB42', status: 'occupied' }, { id: 'TB62', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB23', status: 'available' }, { id: 'TB43', status: 'occupied' }, { id: 'TB63', status: 'occupied' }],
          [{ id: 'TB4', status: 'available' }, { id: 'TB24', status: 'available' }, { id: 'TB44', status: 'occupied' }, { id: 'TB64', status: 'occupied' }],
          [{ id: 'TB5', status: 'available' }, { id: 'TB25', status: 'available' }, { id: 'TB45', status: 'occupied' }, { id: 'TB65', status: 'occupied' }],
          [{ id: 'TB6', status: 'available' }, { id: 'TB26', status: 'available' }, { id: 'TB46', status: 'occupied' }, { id: 'TB66', status: 'occupied' }],
          [{ id: 'TB7', status: 'available' }, { id: 'TB27', status: 'available' }, { id: 'TB47', status: 'occupied' }, { id: 'TB67', status: 'occupied' }],
          [{ id: 'TB8', status: 'available' }, { id: 'TB28', status: 'available' }, { id: 'TB48', status: 'occupied' }, { id: 'TB68', status: 'occupied' }],
          [{ id: 'TB9', status: 'available' }, { id: 'TB29', status: 'available' }, { id: 'TB49', status: 'occupied' }, { id: 'TB69', status: 'occupied' }],
          [{ id: 'TB10', status: 'available' }, { id: 'TB30', status: 'available' }, { id: 'TB50', status: 'occupied' }, { id: 'TB70', status: 'occupied' }],
          [{ id: 'TB11', status: 'available' }, { id: 'TB31', status: 'available' }, { id: 'TB51', status: 'occupied' }, { id: 'TB71', status: 'occupied' }],
          [{ id: 'TB12', status: 'available' }, { id: 'TB32', status: 'available' }, { id: 'TB52', status: 'occupied' }, { id: 'TB72', status: 'occupied' }],
          [{ id: 'TB13', status: 'available' }, { id: 'TB33', status: 'available' }, { id: 'TB53', status: 'occupied' }, { id: 'TB73', status: 'occupied' }],
          [{ id: 'TB14', status: 'available' }, { id: 'TB34', status: 'available' }, { id: 'TB54', status: 'occupied' }, { id: 'TB74', status: 'occupied' }],
          [{ id: 'TB15', status: 'available' }, { id: 'TB35', status: 'available' }, { id: 'TB55', status: 'occupied' }, { id: 'TB75', status: 'occupied' }],
          [{ id: 'TB16', status: 'available' }, { id: 'TB36', status: 'available' }, { id: 'TB56', status: 'occupied' }, { id: 'TB76', status: 'occupied' }],
          [{ id: 'TB17', status: 'available' }, { id: 'TB37', status: 'available' }, { id: 'TB57', status: 'occupied' }, { id: 'TB77', status: 'occupied' }],
          [{ id: 'TB18', status: 'available' }, { id: 'TB38', status: 'available' }, { id: 'TB58', status: 'occupied' }, { id: 'TB78', status: 'occupied' }],
          [{ id: 'TB19', status: 'available' }, { id: 'TB39', status: 'available' }, { id: 'TB59', status: 'occupied' }, { id: 'TB79', status: 'occupied' }],
          [{ id: 'TB20', status: 'available' }, { id: 'TB40', status: 'available' }, { id: 'TB60', status: 'occupied' }, { id: 'TB80', status: 'occupied' }]
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'CO1', status: 'available' }, { id: 'CO2', status: 'occupied' }, { id: 'CO3', status: 'occupied' }, { id: 'CO4', status: 'occupied' }, { id: 'CO5', status: 'occupied' }, { id: 'CO6', status: 'occupied' }, { id: 'CO7', status: 'occupied' }, { id: 'CO8', status: 'occupied' }, { id: 'CO9', status: 'occupied' }, { id: 'CO10', status: 'occupied' }],
          [{ id: 'CO11', status: 'available' }, { id: 'CO12', status: 'available' }, { id: 'CO13', status: 'available' }, { id: 'CO14', status: 'available' }, { id: 'CO15', status: 'available' }, { id: 'CO16', status: 'available' }, { id: 'CO17', status: 'available' }, { id: 'CO18', status: 'available' }, { id: 'CO19', status: 'available' }, { id: 'CO20', status: 'available' }],
          [{ id: 'CO21', status: 'available' }, { id: 'CO22', status: 'available' }, { id: 'CO23', status: 'available' }, { id: 'CO24', status: 'available' }, { id: 'CO25', status: 'available' }, { id: 'CO26', status: 'available' }, { id: 'CO27', status: 'available' }, { id: 'CO28', status: 'available' }, { id: 'CO29', status: 'available' }, { id: 'CO30', status: 'available' }],
          [{ id: 'CO31', status: 'available' }, { id: 'CO32', status: 'available' }, { id: 'CO33', status: 'available' }, { id: 'CO34', status: 'available' }, { id: 'CO35', status: 'available' }, { id: 'CO36', status: 'available' }, { id: 'CO37', status: 'available' }, { id: 'CO38', status: 'available' }, { id: 'CO39', status: 'available' }, { id: 'CO40', status: 'available' }]
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'CP1', status: 'available' }, { id: 'CP2', status: 'occupied' }, { id: 'CP3', status: 'occupied' }, { id: 'CP4', status: 'occupied' }, { id: 'CP5', status: 'occupied' }, { id: 'CP6', status: 'occupied' }, { id: 'CP7', status: 'occupied' }, { id: 'CP8', status: 'occupied' }, { id: 'CP9', status: 'occupied' }, { id: 'CP10', status: 'occupied' }],
          [{ id: 'CP11', status: 'available' }, { id: 'CP12', status: 'available' }, { id: 'CP13', status: 'available' }, { id: 'CP14', status: 'available' }, { id: 'CP15', status: 'available' }, { id: 'CP16', status: 'available' }, { id: 'CP17', status: 'available' }, { id: 'CP18', status: 'available' }, { id: 'CP19', status: 'available' }, { id: 'CP20', status: 'available' }],
          [{ id: 'CP21', status: 'available' }, { id: 'CP22', status: 'available' }, { id: 'CP23', status: 'available' }, { id: 'CP24', status: 'available' }, { id: 'CP25', status: 'available' }, { id: 'CP26', status: 'available' }, { id: 'CP27', status: 'available' }, { id: 'CP28', status: 'available' }, { id: 'CP29', status: 'available' }, { id: 'CP30', status: 'available' }],
          [{ id: 'CP31', status: 'available' }, { id: 'CP32', status: 'available' }, { id: 'CP33', status: 'available' }, { id: 'CP34', status: 'available' }, { id: 'CP35', status: 'available' }, { id: 'CP36', status: 'available' }, { id: 'CP37', status: 'available' }, { id: 'CP38', status: 'available' }, { id: 'CP39', status: 'available' }, { id: 'CP40', status: 'available' }]
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS11', status: 'occupied' }, { id: 'PS21', status: 'occupied' }, { id: 'PS31', status: 'occupied' }],
          [{ id: 'PS2', status: 'available' }, { id: 'PS12', status: 'available' }, { id: 'PS22', status: 'occupied' }, { id: 'PS32', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS13', status: 'available' }, { id: 'PS23', status: 'occupied' }, { id: 'PS33', status: 'occupied' }],
          [{ id: 'PS4', status: 'available' }, { id: 'PS14', status: 'available' }, { id: 'PS24', status: 'occupied' }, { id: 'PS34', status: 'occupied' }],
          [{ id: 'PS5', status: 'available' }, { id: 'PS15', status: 'available' }, { id: 'PS25', status: 'occupied' }, { id: 'PS35', status: 'occupied' }],
          [{ id: 'PS6', status: 'available' }, { id: 'PS16', status: 'available' }, { id: 'PS26', status: 'occupied' }, { id: 'PS36', status: 'occupied' }],
          [{ id: 'PS7', status: 'available' }, { id: 'PS17', status: 'available' }, { id: 'PS27', status: 'occupied' }, { id: 'PS37', status: 'occupied' }],
          [{ id: 'PS8', status: 'available' }, { id: 'PS18', status: 'available' }, { id: 'PS28', status: 'occupied' }, { id: 'PS38', status: 'occupied' }],
          [{ id: 'PS9', status: 'available' }, { id: 'PS19', status: 'available' }, { id: 'PS29', status: 'occupied' }, { id: 'PS39', status: 'occupied' }],
          [{ id: 'PS10', status: 'available' }, { id: 'PSs20', status: 'available' }, { id: 'PS30', status: 'occupied' }, { id: 'PS40', status: 'occupied' }]
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'BC1', status: 'available' }, { id: 'BC21', status: 'occupied' }, { id: 'BCB1', status: 'occupied' }, { id: 'BC61', status: 'occupied' }],
          [{ id: 'BC2', status: 'available' }, { id: 'BC22', status: 'available' }, { id: 'BC42', status: 'occupied' }, { id: 'BC62', status: 'occupied' }],
          [{ id: 'BC3', status: 'available' }, { id: 'BC23', status: 'available' }, { id: 'BC43', status: 'occupied' }, { id: 'BC63', status: 'occupied' }],
          [{ id: 'BC4', status: 'available' }, { id: 'BC24', status: 'available' }, { id: 'BC44', status: 'occupied' }, { id: 'BC64', status: 'occupied' }],
          [{ id: 'BC5', status: 'available' }, { id: 'BC25', status: 'available' }, { id: 'BC45', status: 'occupied' }, { id: 'BC65', status: 'occupied' }],
          [{ id: 'BC6', status: 'available' }, { id: 'BC26', status: 'available' }, { id: 'BC46', status: 'occupied' }, { id: 'BC66', status: 'occupied' }],
          [{ id: 'BC7', status: 'available' }, { id: 'BC27', status: 'available' }, { id: 'BC47', status: 'occupied' }, { id: 'BC67', status: 'occupied' }],
          [{ id: 'BC8', status: 'available' }, { id: 'BC28', status: 'available' }, { id: 'BC48', status: 'occupied' }, { id: 'BC68', status: 'occupied' }],
          [{ id: 'BC9', status: 'available' }, { id: 'BC29', status: 'available' }, { id: 'BC49', status: 'occupied' }, { id: 'BC69', status: 'occupied' }],
          [{ id: 'BC10', status: 'available' }, { id: 'BC30', status: 'available' }, { id: 'BC50', status: 'occupied' }, { id: 'BC70', status: 'occupied' }],
          [{ id: 'BC11', status: 'available' }, { id: 'BC31', status: 'available' }, { id: 'BC51', status: 'occupied' }, { id: 'BC71', status: 'occupied' }],
          [{ id: 'BC12', status: 'available' }, { id: 'BC32', status: 'available' }, { id: 'BC52', status: 'occupied' }, { id: 'BC72', status: 'occupied' }],
          [{ id: 'BC13', status: 'available' }, { id: 'BC33', status: 'available' }, { id: 'BC53', status: 'occupied' }, { id: 'BC73', status: 'occupied' }],
          [{ id: 'BC14', status: 'available' }, { id: 'BC34', status: 'available' }, { id: 'BC54', status: 'occupied' }, { id: 'BC74', status: 'occupied' }],
          [{ id: 'BC15', status: 'available' }, { id: 'BC35', status: 'available' }, { id: 'BC55', status: 'occupied' }, { id: 'BC75', status: 'occupied' }],
          [{ id: 'BC16', status: 'available' }, { id: 'BC36', status: 'available' }, { id: 'BC56', status: 'occupied' }, { id: 'BC76', status: 'occupied' }],
          [{ id: 'BC17', status: 'available' }, { id: 'BC37', status: 'available' }, { id: 'BC57', status: 'occupied' }, { id: 'BC77', status: 'occupied' }],
          [{ id: 'BC18', status: 'available' }, { id: 'BC38', status: 'available' }, { id: 'BC58', status: 'occupied' }, { id: 'BC78', status: 'occupied' }],
          [{ id: 'BC19', status: 'available' }, { id: 'BC39', status: 'available' }, { id: 'BC59', status: 'occupied' }, { id: 'BC79', status: 'occupied' }],
          [{ id: 'BC20', status: 'available' }, { id: 'BC40', status: 'available' }, { id: 'BC60', status: 'occupied' }, { id: 'BC80', status: 'occupied' }]
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN11', status: 'occupied' }, { id: 'PN21', status: 'occupied' }, { id: 'PN31', status: 'occupied' }],
          [{ id: 'PN2', status: 'available' }, { id: 'PN12', status: 'available' }, { id: 'PN22', status: 'occupied' }, { id: 'PN32', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN13', status: 'available' }, { id: 'PN23', status: 'occupied' }, { id: 'PN33', status: 'occupied' }],
          [{ id: 'PN4', status: 'available' }, { id: 'PN14', status: 'available' }, { id: 'PN24', status: 'occupied' }, { id: 'PN34', status: 'occupied' }],
          [{ id: 'PN5', status: 'available' }, { id: 'PN15', status: 'available' }, { id: 'PN25', status: 'occupied' }, { id: 'PN35', status: 'occupied' }],
          [{ id: 'PN6', status: 'available' }, { id: 'PN16', status: 'available' }, { id: 'PN26', status: 'occupied' }, { id: 'PN36', status: 'occupied' }],
          [{ id: 'PN7', status: 'available' }, { id: 'PN17', status: 'available' }, { id: 'PN27', status: 'occupied' }, { id: 'PN37', status: 'occupied' }],
          [{ id: 'PN8', status: 'available' }, { id: 'PN18', status: 'available' }, { id: 'PN28', status: 'occupied' }, { id: 'PN38', status: 'occupied' }],
          [{ id: 'PN9', status: 'available' }, { id: 'PN19', status: 'available' }, { id: 'PN29', status: 'occupied' }, { id: 'PN39', status: 'occupied' }],
          [{ id: 'PN10', status: 'available' }, { id: 'PN20', status: 'available' }, { id: 'PN30', status: 'occupied' }, { id: 'PN40', status: 'occupied' }]
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O11', status: 'occupied' }, { id: 'O21', status: 'occupied' }, { id: 'O31', status: 'occupied' }],
          [{ id: 'OP2', status: 'available' }, { id: 'O12', status: 'available' }, { id: 'O22', status: 'occupied' }, { id: 'O32', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O13', status: 'available' }, { id: 'O23', status: 'occupied' }, { id: 'O33', status: 'occupied' }],
          [{ id: 'O4', status: 'available' }, { id: 'O14', status: 'available' }, { id: 'O24', status: 'occupied' }, { id: 'O34', status: 'occupied' }],
          [{ id: 'O5', status: 'available' }, { id: 'O15', status: 'available' }, { id: 'O25', status: 'occupied' }, { id: 'O35', status: 'occupied' }],
          [{ id: 'O6', status: 'available' }, { id: 'O16', status: 'available' }, { id: 'O26', status: 'occupied' }, { id: 'O36', status: 'occupied' }],
          [{ id: 'O7', status: 'available' }, { id: 'O17', status: 'available' }, { id: 'O27', status: 'occupied' }, { id: 'O37', status: 'occupied' }],
          [{ id: 'O8', status: 'available' }, { id: 'O18', status: 'available' }, { id: 'O28', status: 'occupied' }, { id: 'O38', status: 'occupied' }],
          [{ id: 'O9', status: 'available' }, { id: 'O19', status: 'available' }, { id: 'O29', status: 'occupied' }, { id: 'O39', status: 'occupied' }],
          [{ id: 'O10', status: 'available' }, { id: 'O20', status: 'available' }, { id: 'O30', status: 'occupied' }, { id: 'O40', status: 'occupied' }]
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 2,
    title: 'Miel de Azar Tour',
    artist: 'Siddhartha',
    description: 'Disfruta del mejor concierto de música clásica de la historia.',
    date: '09/12/2024',
    time: '18:00',
    longDescription: 'Este evento es una oportunidad única para vivir la majestuosidad de la música clásica en su máxima expresión. La Orquesta Filarmónica, dirigida por un renombrado director, interpretará las más grandes composiciones de Beethoven, como la Sinfonía No. 5 y la Sinfonía No. 9. Este concierto no solo es una celebración de la música clásica, sino también una experiencia que te transportará a otro tiempo con su poder emocional y su complejidad musical.',
    image: '/siddhartha.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/siddharthamusica/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/IamSiddhartha' },
      { icon: 'instagram', url: 'https://www.instagram.com/iamsiddhartha?igsh=MXAwYXB2MDZmaXpydg==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 3,
    title: 'Kygo World Tour 2024',
    artist: 'Kygo',
    date: '22/11/2024',
    time: '21:00',
    longDescription: 'Kygo es uno de los DJs más destacados en la escena de la música electrónica tropical house. En este concierto, los asistentes tendrán la oportunidad de disfrutar de una mezcla de ritmos tropicales y sonidos electrónicos que han conquistado las principales listas de éxitos internacionales. Con su característico estilo melódico, Kygo promete ofrecer una noche llena de energía, buenas vibras y una producción visual impresionante.',
    image: '/kygo.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/kygoofficial/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/KygoMusic' },
      { icon: 'instagram', url: 'https://www.instagram.com/kygomusic?igsh=czlyMXZ3b2I4Mmw3' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 4,
    title: 'The Big Steppers Tour',
    artist: 'Kendrick Lamar',
    description: 'Sé parte de una gran experiencia con K-Dot',
    date: '22/01/2025',
    time: '20:00',
    longDescription: 'Kendrick Lamar, uno de los artistas más influyentes del hip-hop contemporáneo, llevará su increíble talento y sus letras poderosas a este evento único. El concierto presentará los temas más representativos de su carrera, incluyendo los de su último álbum. Además, Kendrick Lamar es conocido por su increíble capacidad para conectar con el público, lo que garantiza una experiencia musical y emocional que quedará grabada en la memoria de todos los asistentes.',
    image: '/kendrick_lamar.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/kendricklamar/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/kendricklamar?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/kendricklamar?igsh=MXdjMXd3MHp1bjExbg==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
];
const mockUpcomingEvents = [
  {
    id: 5,
    title: 'Endless 2 Tour 2024',
    artist: 'Frank Ocean',
    description: 'Vive el regreso de este gran artista en Endless Tour 2',
    date: '15/12/2024',
    time: '19:00',
    longDescription: 'Frank Ocean, uno de los artistas más enigmáticos y aclamados de la música contemporánea, regresa a los escenarios con su nuevo tour. En este concierto, Frank presentará su más reciente trabajo musical, así como algunas de sus canciones más emblemáticas. Con su estilo único que mezcla R&B, soul y música electrónica, Frank Ocean promete una noche llena de momentos íntimos y una atmósfera única que solo él sabe crear.',
    image: '/frank_ocean.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/frankocean/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/frankoccean?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/blonded?igsh=MWRtanZpamZkdGVvMA==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 6,
    title: 'Luis Miguel Tour',
    artist: 'Luis Miguel',
    description: 'El Sol de México en concierto.',
    date: '20/12/2024',
    time: '20:00',
    longDescription: 'Luis Miguel, el icónico Sol de México, regresa a los escenarios con una serie de conciertos que no te puedes perder. Con su voz inconfundible y su impresionante presencia en el escenario, Luis Miguel interpretará algunos de los mayores éxitos de su carrera, así como canciones de su más reciente álbum. Este concierto promete ser una celebración de su legado musical y una noche llena de emoción para todos sus fans.',
    image: '/luis_miguel.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/luismiguelofficial/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/lmxlm?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/luismiguel?igsh=MWVjcHdhcjl6azltdA==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 7,
    title: 'Circus Maximus Tour',
    artist: 'Travis Scott',
    description: 'La gran presencia de La Flame',
    date: '31/12/2024',
    time: '22:00',
    longDescription: 'Travis Scott, conocido por su energía desbordante y su presencia magnética en el escenario, trae su esperado tour a la ciudad. Este evento será una explosión de música trap, hip-hop y efectos visuales impresionantes que harán que el público se sienta parte de la experiencia. Con temas como "SICKO MODE" y "Goosebumps", Travis Scott promete una noche inolvidable llena de adrenalina y ritmo.',
    image: '/travis_scott.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/travisscottlaflame/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/trvisXX' },
      { icon: 'instagram', url: 'https://www.instagram.com/travisscott?igsh=MWQxZnlqZmQ3dnNjeQ==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 8,
    title: 'Rammstein World Tour 2025',
    artist: 'Rammstein',
    description: 'Experimenta lo inolvidable con Rammstein',
    date: '05/01/2025',
    time: '19:00',
    longDescription: 'Rammstein es una de las bandas más grandes del metal industrial, conocida por sus espectaculares y polémicas presentaciones en vivo. En este concierto, los fans podrán disfrutar de una selección de los éxitos más grandes de la banda, con una puesta en escena que incluye efectos pirotécnicos, luces intensas y un sonido imponente. Si eres fanático del metal y la música de alto voltaje, este evento es una cita obligada.',
    image: '/rammstein.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/Rammstein/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/rsprachrohr' },
      { icon: 'instagram', url: 'https://www.instagram.com/rammsteinofficial?igsh=YTZmM3RscXo0c3dq' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 9,
    title: 'Chromakopia World Tour',
    artist: 'Tyler, The Creator',
    description: 'Disfruta del nuevo tour Chromakopia',
    date: '18/01/2025',
    time: '21:00',
    longDescription: 'Tyler, The Creator, uno de los artistas más innovadores y creativos de la escena musical actual, presenta su nuevo tour "Chromakopia". En este concierto, Tyler ofrecerá una mezcla de sus éxitos más conocidos junto con su más reciente música experimental. Con su estilo único, que combina hip-hop, rap alternativo y elementos visuales de vanguardia, Tyler promete un espectáculo que desafiará las expectativas y dejará a su audiencia maravillada.',
    image: '/tyler_thecreator.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/TylerTheCreator/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/tylerthecreator' },
      { icon: 'instagram', url: 'https://www.instagram.com/feliciathegoat?igsh=b28zMnRuZnE0NzE3' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  }, 
];

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para búsqueda por texto
  const [selectedDate, setSelectedDate] = useState(null); // Estado para búsqueda por fecha

  // Función para convertir un objeto Date a formato dd/MM/yyyy
  const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  };

  // Filtrar eventos destacados
  const filteredFeaturedEvents = mockFeaturedEvents.filter((event) => {
      const matchesTitle = searchQuery && event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArtist = searchQuery && event.artist.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDate =
          selectedDate &&
          event.date === formatDate(selectedDate); // Comparar con fecha formateada
      return matchesTitle || matchesArtist || matchesDate;
  });

  // Filtrar eventos próximos
  const filteredUpcomingEvents = mockUpcomingEvents.filter((event) => {
      const matchesTitle = searchQuery && event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArtist = searchQuery && event.artist.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDate =
          selectedDate &&
          event.date === formatDate(selectedDate); // Comparar con fecha formateada
      return matchesTitle || matchesArtist || matchesDate;
  });

  return (
      <Router>
          <div className="App">
              {/* Pasar estados y funciones al Nav */}
              <Nav
                  onSearch={({ date, text }) => {
                      setSelectedDate(date);
                      setSearchQuery(text);
                  }}
              />
              <div className="main-content">
                  <Routes>
                      <Route
                          path="/"
                          element={
                              <>
                                  {/* Renderizar FeaturedEvent con o sin búsqueda */}
                                  <FeaturedEvent
                                      events={searchQuery || selectedDate ? filteredFeaturedEvents : mockFeaturedEvents}
                                      isSearchMode={!!(searchQuery || selectedDate)}
                                  />
                                  {/* Renderizar UpcomingEvents con o sin búsqueda */}
                                  <UpcomingEvents
                                      events={searchQuery || selectedDate ? filteredUpcomingEvents : mockUpcomingEvents}
                                      isSearchMode={!!(searchQuery || selectedDate)}
                                  />
                              </>
                          }
                      />
                      {/* Otras rutas */}
                      <Route
                          path="/event/:id"
                          element={<EventDetails events={[...mockFeaturedEvents, ...mockUpcomingEvents]} />}
                      />
                      {/* Selección de asientos */}
                    <Route
                      path="/buy-tickets/:id"
                      element={<SeatSelection events={[...mockFeaturedEvents, ...mockUpcomingEvents]} />}
                    />
                    <Route path="/purchase-tickets" element={<PurchaseTickets />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
