# Inbody

<img src="https://angular.io/assets/images/logos/angular/shield-large.svg" width="100" height="100" />
<img src="https://avatars0.githubusercontent.com/u/16272733?v=4&s=200" width="100" height="100" />
<img src="https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667" width="100" height="100" />
<img src="http://idangero.us/swiper/i/logo.png" width="100" height="100" />

[DEPLOY VIEW LINK](https://inbody-c8369.firebaseapp.com)

##Basic useful feature list:

 * 로그인이 필요하며, 최초 사용자의 키 정보를 입력 받아야한다.
 * 몸무게, 체지방량, 근육량을 입력했을때, 변화량을 한눈에 볼수 있게 그래프로 표현

 * 입력 정보를 이용하여 BMI, 체지방률을 계산할 수 있다. 
 ```
BMI = 체중(kg) / 신장(m) / 신장(m)
체지방률 = 체중 / 체지방량 * 100 (%)
 ```
 * 아침, 점심, 저녁 체중의 경우 평균을 낸다. (예정)

UI feature list:

* 로그인 : 우선은 email, password 기반
* 하단 탭 : Input(몸무게, 체지방량, 근육량), WeeklyGraph(D3), DailyTable(D3, Swiper), Setting


### Setup
- Installation
```$xslt
  npm install -g yarn
  yarn install
```

- dev
```$xslt
  yarn start
```

- Build & deploy
```$xslt
  yarn build  // generate bundle files
  yarn deploy // firebase hosting upload
```


# Firebase Configure
[Project Dashboard](https://console.firebase.google.com/project/inbody-c8369/overview)

[Users](https://console.firebase.google.com/project/inbody-c8369/authentication/users)

[Reatime Database](https://console.firebase.google.com/project/inbody-c8369/database/data)

[Realtime Database doc](https://firebase.google.com/docs/database/web/read-and-write#detach_listeners)

* ID : techx.fe@gmail.com
* PASSWORD : techx.fe1!


# Data Structure

```JSON
Not yet Implemented.
{
  userInfo:{
  email, weight, height
  }
}
{
	data: {
    체중, 체지방, 근육, 날짜, BMI
    datetime: 1029329832
  }
}
```

