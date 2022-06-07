const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cast = {
    'kim hye hyoon': {
        'born': 'November 10, 1996',
        'age' : 25,
        'height': `1.60m (5'2")`,
        'character played' : 'Eun Dan Oh', 
        'instagram': '@hye_yoon1110',
        'other works' : {
            'Movies': `Ditto as Han-Sol | 2023, The Girl on a Bulldozer as Gu Hye-Young | 2022, Midnight as Choie Seo-jung| 2021, The Bad Guys: Reign of Chaos as Oh Ji-Yeon | 2019, Another Child as Jun Hyun-Joo | 2019, Memoir of a Murderer as Maria | 2017`,
            'Tv Shows' : `Cleaning up as a Convenience store customer (ep.1) | 2022, Snowdrop as Gye Bun-Ok | 2021, Secret Royal Inspector & Joy as Kim Joy | 2021, True Beauty as Eun Dan Oh (ep.4) | 2020-2021, Live On as Seo Hyun-A | 2020, Record of Youth as Lee Bo-Ra (ep.1) | 2020, Extraordinary You as Eun Dan-Oh | 2019, SKY Castle as Kang Ye-Seo | 2018-2019, Let's Eat 3 as a Traffic accident patient's daughter (ep.1) | 2018, Come and Hug me as Yeon-Sil | 2018, Oh, the Mysterious as Kook Soo-Ran (ep.26) | 2018, Man Who Sets the Table as Jung Soo-Ji |2017, Radiant Office as a disorderly student | 2017, Tunnel as Young-Ja | 2017, Queen of Ring as girl 1 of 3 sitting down (ep.3) | 2017, Guardian: The Lonely and Great God as seperated family yound days wife | 2016-2017, Legen of the Blue Sea as a deliquent | 2016-2017, Shopaholic Louis as a delinquent | 2016, Cinderella and the Four Knights as a convenience store part-time worker (ep.2) | 2016, Doctors as a female high school student (ep.2) | 2016, Mrs. Cop as a runaway female student (ep.2) | 2015, Hidden Identity as Jang Min-Joo | 2015, The Return of Hwang Geum-Bok as Hwang Eun-Sil | 2015, A Daughter Just Like You as Ma Ji-Sung | 2014-2015, Puch as Jo Gang-Jae's daughter, Pride and Prejudice as Kang Han-Na | 2014-2015, Bad Guys as Oh Ji-Yeon | 2014, My Love From the Star as a bad student | 2013-2014, I Can hear Your Voice as Do-Yeon's high school friend | 2013, Queen of Ambition as a student | 2013, TV Novel: Samsaengi as Jung Yoon-Hee | 2013, Family as girl | 2012-2013, I Miss You as a female student | 2012-2013, The Great Seer as tied girl | 2012-2013`
        }
    },
    'rowoon':{
        'born': 'August 7, 1996',
        'age': 25,
        'height': `189cm (6'2")`,
        'character played': 'Ha-ru',
        'instagram': '@ewsbdi',
        'other works': {
            'Movies': '',
            'TV Shows': `Tomorrow as Choi Jun-Woong | 2022, The King's Affection as Jung Ji-Un | 2021, She Would Never Know as Chae Hyun-Seung | 2021,  Was It Love as a SF9 member (ep.6), Find Me in Your Memory as Joo Yeo-Min (ep.1), Extraordinary You as Ha-ru | 2019, Where Stars Land as Ko Eun-Sub | 2018, About Time as Choi Wi-Jin | 2018, School 2017`
        },
        'notes': 'Member of boy group "SF9".'
    },
    'lee jae-wook':{
        'born': 'May 10, 1998',
        'age': 24,
        'height': `187cm (6'1")`,
        'character played': 'Baek Kyung',
        'instagram': '@jxxvvxxk',
        'other works': {
            'Movies': 'Battle of Jangsari as Lee Gae-Tae | 2019',
            'TV Shows': 'Alchemy of Souls as Jang Wook | 2022, Kiss Sixth Sense as "Haroo" actor (ep.3) | 2022, Move to Heaven as Kim Su-Cheol | 2021, True Beauty as Baek Kyung (ep.4) |  2020-2021, Do Do Sol Sol La La Sole as Sunwoo Joon | 2020, When the Weather is Fine as Lee Jang-Woo | 2020, Extraordinary You as Baek Kyung | 2019, Search: WWW as Seol Ji-Hwan | 2019, Memories of the Alahambra as Marco Han | 2018-2019, '
        }
    },
    'kim young-dae':{
        'born': 'March 2, 1996',
        'age': 26,
        'height': `185cm (6'0")`,
        'character played': 'Oh Nam-joo',
        'instagram': '@youngdae0302',
        'other works': {
            'Movies': 'Drama Special: The Expiration Date of You and Me as Kim Min-Sik | 2018',
            'TV Shows': 'Sh**ting Stars as Gong Tae-Sung | 2022, Penthouse 3 as Joo Seok-Hoon | 2021, Undercover as Kimg Tae-Yeol | 2021, Penthouse 2 as Joo Seok-Hoon | 2021, True Beauty as Oh Nam-Joo (ep.15), Penthouse as Joo Seok-Hoon | 2020-2021, Cheat On Me If You Can as Cha Soo-Ho | 2020-2021, When the Weather is Fine as Oh Young-Woo | 2020, Extraordinary You as Oh Nam-Joo | 2019, Welcome to Waikiki 2 as a baseball prospect | 2019, Item as Kang Gon | 2019'
        }
    },
    'lee na-eun':{
        'born': 'May 5, 1999',
        'age': 23,
        'height': `167cm (5'5")`,
        'character played': 'Yeo Joo-da',
        'instagram': '@betterlee_0824',
        'other works': {
            'Movies': '',
            'TV Shows': 'Hip Hop King as Song Ha-Jin | 2019, Extraordinary You as Yeo Joo-Da | 2019, Modulove as Na Eun | 2017, My Father is Strange as a drama staff', 
            'Web Series': 'Twenty Twenty as Kim Ha-Na | 2020, I have a Secret as Kim Ha- Na | 2019, Ateen2 as Kim Ha-Na | 2019, Ateen as Kimg Ha-Na | 2018'
        },
        'notes': 'Member of K-pop group "April".'
    },
    'jung gun-joo':{
        'born': 'May 26, 1995',
        'age': 25,
        'height': `187cm (6'1")`,
        'character played': 'Lee Do-hwa',
        'instagram': '@jrjswn',
        'other works': {
            'Movies': 'Drama Special: The Tuna and The Dolphin as Jo Woo-Jin | 2018',
            'TV Shows': `Kiss Sixth Sense as Hong Ye-Sool's ex-boyfriend (ep.1) | 2022, Monthly Magazine Home as Shin Gyeom | 2021, True Beauty as Ryu Hyung-Jin (ep.7) | 2020-2021, Oh My Baby as Choi Kang Eu Ddeum | 2020, Extraordinary You as Lee Do-Hwa | 2019, The 3rd Charm as Oh Min-Joon | 2018, Shoulw We Kiss First as highway rest stop man`
        }
    },
    'lee tae-ri':{
        'born': 'June 28, 1993',
        'age': 28,
        'height': `180cm (5'9")`,
        'character played': 'Jinmichae ("Squid Fairy")',
        'instagram': '@tae_rii_',
        'other works': {
            'Movies': `The Wrath as Hae Cheon-Bi | 2018, Time Renegades as Kang Seung-Bum | 2016, A Case of Bachelor Abduction as Mok-Wan | 2014, Running Man as Cha Gi-Hyuk | 2013, Howling as Sang-Gil's Son | 2012, Be With Me as Park Chul-Min (segment "Tarot 1. Ghost Boy") | 2010, Le Grand Chef as Sung-Chan | 2007, Show Show Show as Eun-Ryong | 2002, Waikiki Brothers as In-Ki | 2001`,
            'TV Shows': 'Bloody Heart as Park Nam-Sang | 2022, The King of Tears as prince Yangnyeong | 2021-2022, True Beauty as Wang Hyun-Bin (ep.1), Tale of the nine Tailed as Imoogi | 2020, Extraoridnary You as Jinmiche | 2019, Search: WWW as Go Do-Ri (ep.7) | 2019, Voice 3 as Tomoyuki (ep.2) | 2019, Coffee Please as Moon Jung-Won | 2018-2019, '
        }
    }
    
    
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) =>{
    const castName = request.params.name.toLowerCase()
    if (cast[castName]){
        response.json(cast[castName])
    }else{
        response.json(cast['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`);
})