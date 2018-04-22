# 01 angular - 고재도님

오늘의 목표 어플

- 마이크로소프트의 Todo App(모티브) 
- Todo App

# 자바스크립트 프레임워크의 발전

MVC Framework ( backbone.js, angular.js ) -> Component Framework( Angular, React, Vue )

# 컴포넌트 개요

- 명세를 가진 다시 사용할 수 있는 소프트웨어 구성요소
- 애플리케이션 기본요소로 HTML 요소들을 포함
- 독립된 구성요소로 뷰와 로직으로 구성됨

# Anguluar Framework

- 클라이언트 어플리케이션을 위한 프레임워크
- 웹 플랫폼
- Google
- 단일 페이지 웹 애플케이션
- 타입스크립트

# Sing-Page Application

사용자 인터랙션에 의해 URL이 변경시 화면 전체의 로드가 없이 화면의 일부분 동적으로 렌더링하여 데스크탑 어플리케이션과 비슷한 유저경험 제공

- AJAX를 이용해서 대부분의 리소스들은 어플리케이션 로드시 한번 읽음
- JSON과 같은 데이터만 어플리케이션 실행 중에 읽어오고 관련된 화면을 변경시킴

# 타입스크립트 개용

- 마이크로소프트의 오픈소스 프로젝트
- 자바스크립트에 타입 시스템 제공 (생략 가능!)
- 최신 자바스크립트 스펙 제공 (바벨이 별도로 필요 없음)
- 타입스크립트의 장점 (Compilation, Strong typing, Integration with popular Javascript libraries, Encapsulation, Private ang public member variables)

# 타입 어노테이션

변수명뒤에 :typeAnnotation을 통하여 해당 변수의 타입을 정할 수 있음

# 클래스 접근 제한자

    class Base {
        public x: number;
        private y: number;
        protected z: number;
    }

컴파일 시점에만 의미가 있음

# 클래스 속성 단축생성

생성자에서 클래스 접근 제한자와 함께 써야함

# 인터페이스

타입스크립트의 인터페이스 이러한 구조를 가진다.

# webpack 이란?

- 모듈 번들러
- npm과 조합시 gulp와 같은 태스크 러너의 대체도 가능
- 시작 지점이 필요
- 로더를 통해 파일이 모듈로 변경되어 디펜던시 그래프에 추가됨
- 플러그인 시스템이 별도로 존재하여 확장된 기능을 제공

# ES6 모듈 정의 (defalut)

- 하나의 파일이 하나의 모듈이고 하나의 모듈은 default를 가짐
- 동적할당 안됨

# ES6 모듈 정의 (named export)

- 하나의 모듈은 여러 export가 가능함

