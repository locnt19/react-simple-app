import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        "id": "a81dd26f-b771-47cc-9cac-0e1e9ec26af1",
        "name": "530",
        "producer": "BMW",
        "description": "dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "48a64f76-4a72-43dc-8351-b69bcf7fcab7",
        "name": "GL-Class",
        "producer": "Mercedes-Benz",
        "description": "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "a6e51caa-8ee7-4f00-a58c-2e4722513dd7",
        "name": "Grand Marquis",
        "producer": "Mercury",
        "description": "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "732a5fab-0a69-45c7-b019-429393ea3dc3",
        "name": "CL-Class",
        "producer": "Mercedes-Benz",
        "description": "et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "c8ccfd63-9528-41a9-ad30-b5dfcba52b78",
        "name": "Comanche",
        "producer": "Jeep",
        "description": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "37bd41aa-5e10-409c-9671-7c6d31b7c4d5",
        "name": "200",
        "producer": "Chrysler",
        "description": "luctus rutrum nulla tellus in sagittis dui vel nisl duis",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "b4aa4903-7d69-426f-b16d-a114f48aa7f6",
        "name": "Odyssey",
        "producer": "Honda",
        "description": "purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "455a39ae-ab75-4a0a-9a0e-4587a88117ba",
        "name": "Expedition",
        "producer": "Ford",
        "description": "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "3f87ebea-1e14-43eb-b95f-8f423ad785f9",
        "name": "Millenia",
        "producer": "Mazda",
        "description": "nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "07246f37-6079-4da6-90ab-fd2d59b8c2fe",
        "name": "Exige",
        "producer": "Lotus",
        "description": "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "2b64d0cd-c40c-4514-adc8-6523e8e95224",
        "name": "F150",
        "producer": "Ford",
        "description": "nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "601b46fb-90c2-4211-a4fe-8e976cb762f4",
        "name": "Sonata",
        "producer": "Hyundai",
        "description": "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "2bec4104-6277-4e48-85af-86acd30de25e",
        "name": "57",
        "producer": "Maybach",
        "description": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "8cd498be-ab67-49a8-b0eb-8956aaead51e",
        "name": "Sedona",
        "producer": "Kia",
        "description": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "fed83f88-0327-4334-be25-fcded64b1fd8",
        "name": "Ram 3500",
        "producer": "Dodge",
        "description": "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "5d00559b-564f-4809-b437-dbf173b8bb5e",
        "name": "Integra",
        "producer": "Acura",
        "description": "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "61f65ac1-6141-4563-8cd3-9c500e5840b9",
        "name": "Mini",
        "producer": "Austin",
        "description": "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "6f00eecb-e207-44aa-bdbb-52a5ab7646fa",
        "name": "Escort ZX2",
        "producer": "Ford",
        "description": "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "f8e3c31d-fa2b-4729-81cd-d600eb1be783",
        "name": "Outback",
        "producer": "Subaru",
        "description": "fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "6d222f9d-fd9d-433a-b692-4db859eacdc1",
        "name": "Terrain",
        "producer": "GMC",
        "description": "suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "376bb74f-de9d-4dd6-a5d7-e1cdba5f205e",
        "name": "Achieva",
        "producer": "Oldsmobile",
        "description": "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "2c14008d-0611-4ff0-a2ba-59dcdf1969c6",
        "name": "Cirrus",
        "producer": "Chrysler",
        "description": "duis bibendum felis sed interdum venenatis turpis enim blandit mi",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "1a788c78-1432-41bc-9f8e-30e67ed894bd",
        "name": "Mohave/Borrego",
        "producer": "Kia",
        "description": "sit amet eros suspendisse accumsan tortor quis turpis sed ante",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "dbe44307-24db-4e0d-ad3c-9d1cf1778358",
        "name": "62",
        "producer": "Maybach",
        "description": "at nunc commodo placerat praesent blandit nam nulla integer pede justo",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "59b6b433-ea6c-41c2-99cb-c42c78d93476",
        "name": "Ram 3500",
        "producer": "Dodge",
        "description": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "9fff13f1-d66a-4e9a-8446-bb2ceba9e445",
        "name": "Fortwo",
        "producer": "Smart",
        "description": "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "7899aa91-dfd4-4fba-ab2b-44d808d9d6fb",
        "name": "Park Avenue",
        "producer": "Buick",
        "description": "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "93e3222a-ef76-4773-806d-3457a8da032f",
        "name": "Expo",
        "producer": "Mitsubishi",
        "description": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "f9cef93c-da7d-4ec1-a6da-28627e95767a",
        "name": "Esprit",
        "producer": "Lotus",
        "description": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "e1536739-6bbf-4e2e-b342-abaa49cbd4db",
        "name": "Escape",
        "producer": "Ford",
        "description": "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "cb1a8bb4-66ff-48a5-bcf3-79f699d3542f",
        "name": "370Z",
        "producer": "Nissan",
        "description": "dui maecenas tristique est et tempus semper est quam pharetra magna",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "37d0981a-5751-47b0-8c07-e945123eeef1",
        "name": "Aveo",
        "producer": "Chevrolet",
        "description": "sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "c48850da-6523-4723-8c4e-e9eb001ebe02",
        "name": "Accord",
        "producer": "Honda",
        "description": "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "fd0368ad-9671-4f5f-af30-28cdc92ee41c",
        "name": "Monte Carlo",
        "producer": "Chevrolet",
        "description": "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "1d102463-576f-4f94-9e6d-572e5c9258d3",
        "name": "F250",
        "producer": "Ford",
        "description": "non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "9e262b7f-7a93-4edb-b8d2-2aaf269fc368",
        "name": "Pathfinder",
        "producer": "Nissan",
        "description": "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "414c6d77-b8c1-487c-8348-ae89d3b065ff",
        "name": "Rio",
        "producer": "Kia",
        "description": "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "17138eb7-f086-4e14-a4f0-83301d92b5b8",
        "name": "Sonata",
        "producer": "Hyundai",
        "description": "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "24773aa1-e161-4fce-b95e-27f42e4e4663",
        "name": "Sonoma",
        "producer": "GMC",
        "description": "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "0814be08-5e79-4cb0-9a65-b25ccc21fd02",
        "name": "Expedition",
        "producer": "Ford",
        "description": "in congue etiam justo etiam pretium iaculis justo in hac",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "82a9b969-b74c-4ba2-ac7d-bca6d92f2a04",
        "name": "Escalade EXT",
        "producer": "Cadillac",
        "description": "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "3f1a386a-f162-44a5-8874-60e248169fd3",
        "name": "Blazer",
        "producer": "Chevrolet",
        "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "b7160e87-ebf7-46ba-8e99-a5f447addf8f",
        "name": "Pajero",
        "producer": "Mitsubishi",
        "description": "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "c1e68217-787b-4a66-859f-9f267101ec3f",
        "name": "Savana 2500",
        "producer": "GMC",
        "description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "8ed05bde-dd62-4201-9884-384dcd12f4c5",
        "name": "Continental",
        "producer": "Lincoln",
        "description": "a ipsum integer a nibh in quis justo maecenas rhoncus",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "e13fdc17-7f0b-468a-b5b4-11861a604e86",
        "name": "Prizm",
        "producer": "Chevrolet",
        "description": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "47dbe023-330a-4b69-99c4-9b2c09a9adaa",
        "name": "Pathfinder",
        "producer": "Nissan",
        "description": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "ad9ce38c-99a5-45b1-8463-c1f3816450c2",
        "name": "EXP",
        "producer": "Ford",
        "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "607da381-012f-4b40-b00a-36e871d5f31b",
        "name": "GTI",
        "producer": "Volkswagen",
        "description": "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "758b1efa-4a73-41ec-893b-6a3cf4633f78",
        "name": "Express 2500",
        "producer": "Chevrolet",
        "description": "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "c06a7587-deb5-4e38-85fd-c408be8386a8",
        "name": "Rodeo",
        "producer": "Isuzu",
        "description": "erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "04fc84c9-ec1f-4d69-b31e-82824a3b06a1",
        "name": "Sorento",
        "producer": "Kia",
        "description": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "ea07828d-2d2d-43ea-b22d-949d340c1e2e",
        "name": "XC90",
        "producer": "Volvo",
        "description": "ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "588c07b7-36ff-497d-8fa4-a2db139eb2dd",
        "name": "H2",
        "producer": "Hummer",
        "description": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "318c3aa9-b2de-4d0e-8890-d97d3c7010e7",
        "name": "Eclipse",
        "producer": "Mitsubishi",
        "description": "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "78670fe8-19f3-4ab8-810b-6fe04b9c2572",
        "name": "Dakota Club",
        "producer": "Dodge",
        "description": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "e8f5f1cd-7655-4b88-8677-b356405e9475",
        "name": "Accord",
        "producer": "Honda",
        "description": "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "cd89ec54-b2a1-4047-8a05-69aba85f1235",
        "name": "Defender",
        "producer": "Land Rover",
        "description": "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "363bba30-c2cf-49ae-9f7d-202743461fe7",
        "name": "Impala",
        "producer": "Chevrolet",
        "description": "ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "c0a168e6-edb0-4e8f-98dd-cf9d5a02ab3d",
        "name": "Lancer Evolution",
        "producer": "Mitsubishi",
        "description": "nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "4686e2f3-64e8-4589-aaf3-32a3ee4addb9",
        "name": "Express 2500",
        "producer": "Chevrolet",
        "description": "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "0e6ab577-ca54-4803-b128-8041ffc049ad",
        "name": "Yukon",
        "producer": "GMC",
        "description": "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "2e72ce27-bb10-4225-99a3-90caddf2b884",
        "name": "Sable",
        "producer": "Mercury",
        "description": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "59b921e9-eacd-420b-86fa-0b0c6f38e385",
        "name": "RAV4",
        "producer": "Toyota",
        "description": "ut volutpat sapien arcu sed augue aliquam erat volutpat in",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "7249a58d-b525-46f0-b70f-e946d2eec9cb",
        "name": "Suburban 2500",
        "producer": "Chevrolet",
        "description": "eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "8dd4f34c-347d-4b31-8b8b-750c5480c40a",
        "name": "Z8",
        "producer": "BMW",
        "description": "ac lobortis vel dapibus at diam nam tristique tortor eu",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "ef901015-195b-49c2-aa5e-89e982db173f",
        "name": "Blazer",
        "producer": "Chevrolet",
        "description": "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "c64aa34d-00fd-4316-a889-5b2d33e8f4c3",
        "name": "Equinox",
        "producer": "Chevrolet",
        "description": "amet justo morbi ut odio cras mi pede malesuada in",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "a8e615c4-d1ec-47de-8683-f00f23202e47",
        "name": "Corrado",
        "producer": "Volkswagen",
        "description": "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "9089f584-3b34-496c-bcab-56e97a154c3e",
        "name": "Prius Plug-in",
        "producer": "Toyota",
        "description": "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "7887c157-7240-4fbd-a034-8f18feea2077",
        "name": "Ram Van 1500",
        "producer": "Dodge",
        "description": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "939b15f0-a62e-44f7-a180-7453555dcb90",
        "name": "Durango",
        "producer": "Dodge",
        "description": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "383e21a3-f626-48e0-afba-49fc42fa3258",
        "name": "Viper",
        "producer": "Dodge",
        "description": "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "0f02e633-fc6d-49bc-950e-11fa75ee8e62",
        "name": "Explorer Sport Trac",
        "producer": "Ford",
        "description": "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "7756d435-6272-4e26-8273-43b7acd58528",
        "name": "Corvette",
        "producer": "Chevrolet",
        "description": "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "b2b21604-4003-4701-9396-dde418a5022a",
        "name": "Endeavor",
        "producer": "Mitsubishi",
        "description": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "cbd9b7af-7793-4fe2-aa1b-2fb728ccf8a6",
        "name": "Grand Prix",
        "producer": "Pontiac",
        "description": "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "342e30b7-eca1-4ae5-a190-d8da470f9c17",
        "name": "RX",
        "producer": "Lexus",
        "description": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "b78e7b0c-c230-4a74-9dc7-f00a71f5888f",
        "name": "Dakota",
        "producer": "Dodge",
        "description": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "4691806f-bbaa-48dd-ae36-b6562237127f",
        "name": "MR2",
        "producer": "Toyota",
        "description": "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "01765218-f63f-4a8b-9999-4c0af989f032",
        "name": "Yaris",
        "producer": "Toyota",
        "description": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "87988e3a-503b-4e5b-897b-ec566932b937",
        "name": "Blazer",
        "producer": "Chevrolet",
        "description": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "9261e810-e186-4839-b1b3-2914a1ca8acd",
        "name": "F150",
        "producer": "Ford",
        "description": "mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "242c8f08-6887-43dd-9f32-89e0df53d55c",
        "name": "NX",
        "producer": "Nissan",
        "description": "vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "cddc9981-3eb4-4520-be82-e5175d5e3f78",
        "name": "Accord",
        "producer": "Honda",
        "description": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "05834f47-6e74-419a-b4c6-eb5c8b14d8fd",
        "name": "Cayman",
        "producer": "Porsche",
        "description": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "6033796e-a0de-4a5e-8570-3b41ef8a8eae",
        "name": "Park Avenue",
        "producer": "Buick",
        "description": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "a9a852f8-fecc-4212-b117-335fa0755b61",
        "name": "Econoline E350",
        "producer": "Ford",
        "description": "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "a0c7cc7a-0c2c-4c74-b5ea-1f1a9d45010b",
        "name": "TL",
        "producer": "Acura",
        "description": "nunc purus phasellus in felis donec semper sapien a libero nam",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "43565fd6-fbca-40eb-a286-97d927e6e713",
        "name": "XT",
        "producer": "Subaru",
        "description": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        "imageURL": "http://dummyimage.com/250x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "73d336fa-13a7-4ba6-9025-0950d4b8a02e",
        "name": "Charger",
        "producer": "Dodge",
        "description": "etiam faucibus cursus urna ut tellus nulla ut erat id",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "78b7f34e-2a77-49b4-adfc-9c0c23e9d789",
        "name": "LaCrosse",
        "producer": "Buick",
        "description": "fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "40d5492f-80c9-4135-9675-4ca0c0caa2f5",
        "name": "Rio",
        "producer": "Kia",
        "description": "est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
        "imageURL": "http://dummyimage.com/250x200.jpg/dddddd/000000"
      }, {
        "id": "52e0b9a6-3d69-453c-b302-7ccade39fb4f",
        "name": "Cabriolet",
        "producer": "Volkswagen",
        "description": "proin at turpis a pede posuere nonummy integer non velit donec diam",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "45c39aa6-3f33-4c9f-8a0e-ff0d1b32fdcb",
        "name": "C-Class",
        "producer": "Mercedes-Benz",
        "description": "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "d189a53c-001e-4dbd-a43a-3da8a3808fd5",
        "name": "Xterra",
        "producer": "Nissan",
        "description": "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "ba97dbe1-eda5-45a2-a84d-4ac8baab9c9f",
        "name": "Metro",
        "producer": "Chevrolet",
        "description": "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis",
        "imageURL": "http://dummyimage.com/250x200.jpg/cc0000/ffffff"
      }, {
        "id": "9aeb5a70-fa6d-440a-b46b-e133fff8830d",
        "name": "9-5",
        "producer": "Saab",
        "description": "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "85d6493d-4fd5-4cae-b906-9b637207ab01",
        "name": "Swift",
        "producer": "Suzuki",
        "description": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }, {
        "id": "3fac59fc-84f8-4b2a-a3fd-4fbc7f5344f1",
        "name": "Yukon XL 1500",
        "producer": "GMC",
        "description": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
        "imageURL": "http://dummyimage.com/250x200.jpg/ff4444/ffffff"
      }]
    }
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row>
          {
            products.map((product, index) => (
              <Col key={index} md="6" lg="4" className="mt-4">
                <Card className="h-100">
                  <CardImg top width="100%" src={product.imageURL} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{product.producer}</CardSubtitle>
                    <CardText className="mt-2">{product.description}</CardText>
                    <Button>Add to cart</Button>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }
}

export default Products;