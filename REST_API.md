# REST API

### Representational State Transfer

- HTTP URL을 통해 자원을 명시하고,  
  HTTP Method(POST, GET, DELETE, PUT)를 통해 해당 자원에 대한 CRUD(CREATE, READ, UPDATE, DELETE) 오퍼레이션을 적용하는 것

---

### REST 구성요소

1. 자원(Resource): URL
   - 모든 자원에는 고유ID가 존재하고, 자원은 서버에 존재한다.
   - 자원을 구별하는 ID는 HTTP URL로 구분한다.
   - 클라이언트는 URL을 이용해서 자원을 지정하고, 해당 자원에 대한 조작을 서버에 요청한다.
2. 행위(Verb): HTTP method
   - 클라이언트는 HTTP method(post, get, put, delete)를 이용하여 지정한 자원에 대한 조작을 요청한다.
3. 표현(Representation of Resource)
   - 클라이언트가 서버에 자원에 대한 조작을 요청하면 서버는 이에 대한 적절한 응답을 보낸다.

---

### REST 특징

1. Uniform interface
   - 클라이언트가 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍쳐 스타일
   - URL의 길이가 짧아질 뿐만 아니라 하나의 URL을 이용해서 많은 응답(Representation)을 할 수 있다는 장점이 있다.
2. Stateless
   - 작업을 위한 상태정보를 별도로 저장하거나 관리하는 일을 하지 않는다는 것을 의미한다.(서버는 요청을 단순 처리하기만 하면 된다)
   - 서비스의 자유도가 높아지고, 구현이 단순해진다.
3. Cacheable
   - 웹 표준인 HTTP를 그대로 사용하기 때문에 웹에서 사용하는 기존 인프라를 그대로 사용할 수 있다.
   - HTTP의 캐싱 기능을 적용할 수 있다. ('Last-Modified','E-Tag' 등을 이용하면 쉽게 구현이 가능하다)
4. Self-descriptiveness
   - '자체 표현 구조' 로 쉽게 이해할 수 있다는 의미이다.
5. Client - Server 구조
   - 클라이언트와 서버의 역할이 명확히 나뉘기 때문에 필드에서 개발해야 할 점이 명확해지고 서로간 의존성이 줄어들게 된다.
6. 계층형 구조
   - REST 서버는 다중 계층으로 구성될 수 있으며, '보안', '로드 밸런싱', '암호화' 계층 등을 추가하여 구조상의 유연성을 둘 수 있고, 'PROXY', 'GATEWAY'와 같은 네트워크 기반의 중간매체를 사용할 수 있다.

---

### REST API 설계 가이드

1. URL 은 정보의 자원을 표현해야 한다.
   - 자원의 이름은 명사를 사용하는 것이 좋다)
2. 자원에 대한 행위는 HTTP method(get, post, put, delete)로 표현한다.
   - HTTP Method를 통해 CRUD를 할 수 있다.  
     |Method|CRUD 역할|  
     |:----|:----|  
     |POST|POST를 통해 해당 URL을 요청하면 리소스를 생성함|  
     |GET|GET을 통해 해당 리소스를 조회한다.  
     리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져온다|  
     |PUT|PUT을 통해 해당 리소스를 수정한다.|  
     |DELETE|DELETE를 통해 리소스를 삭제한다.|

---

### REST API 설계 시 주의사항

1. 슬래시 구분자(/)는 계층 관계를 나타낼 때 사용한다.
2. URL 마지막에는 슬래시(/)를 포함하지 않는다.
   - REST API는 분명한 URL을 만들어 통신을 해야 하기 때문에 혼동을 주지 않도록 URL의 마지막 경로에는 슬래시(/)를 사용하지 않는다.
3. 하이픈(-)은 URL 가독성을 높히는데 이용한다.
   - 불가피하게 긴 URL을 사용하게 된다면 하이픈(-)을 이용해 가독성을 높히는 것이 좋다.
4. 언더바(\_)는 URL에 사용하지 않는다.
   - 언더바(\_)때문에 다른 문자가 가려지기도 하므로 되도록 사용하지 않는다.
5. URL 경로에는 소문자만을 이용한다.
   - 대문자로 사용할 경우 다른 리소스로 식별할 수 있기 때문에 URL 경로는 소문자만을 이용해서 구성하는 것이 좋다.
   - RFC 3986(URL 문법 형식)에서는 URL 스키마와 호스트를 제외하고는 대소문자를 구별하도록 규정하기 때문이다.
6. 파일 확장자는 URL에 포함시키지 않는다.

   - REST API에서는 메세지 바디 내용의 포맷을 나타내기 위한 파일 확장자를 URL안에 포함시키지 않고, Accept header를 사용한다고 한다.
   - Accept header : HTTP 요청에 대한 응답으로 받고 싶은 미디어타입(MIME형식으로 표현되는)을 명시하는 헤더이다.

     - Accep 헤더와 같이 요청을 받은 서버는 클라이언트의 제안 중 하나를 선택하고 사용하여 Concept-Type 응답 헤더로 클라이언트에게 선택된 미디어 타입에 대해 알려주게 된다.

     - Accept 헤더의 문법은 다음과 같다.

       Accept: <MIME*type>/<MIME_subtype>
       Accept: <MIME_type>/*
       Accept: \_/\*

       // Multiple types, weighted with the quality value syntax:  
        Accept: text/html, application/xhtml+xml, application/xml;q=0.9, _/_;q=0.8

       <MIME*type>/<MIME_subtype> - text/html 타입과 같이 단일의 간결한 MIME 타입을 의미한다.
       <MIME_type>/* - 서버 타입을 갖지 않은 MIME 타입을 의미한다. - image/_은 image/png, image/gif, image/svg등 어떤 다른 이미지 타입들과도일치한다.
       _/\_ - 모든 MIME 타입
       ;q= (q-인자 가중치) - 사용되는 모든 값을 weight라고 부르는 상대적인 가중치를 이용하여 타입의 선호순서를 표시한다.

---

### Resource 간 관계를 표현하는 방법

REST 리소스 간에는 연관 관계가 있을 수 있고, 이런 경우 다음과 같은 표현 방법을 사용한다.  
만약 관계명이 복잡하다면 이를 서브 리소스에 명시적으로 표현하는 방법이 있다.

      /리소스명/리소스 ID/관계가 있는 다른 리소스명
      GET : /creatores/{creatorId}/products (일반적으로 소유 ‘has’의 관계를 표현할 때)
      GET : /users/{userid}/likes/products (관계명이 애매하거나 구체적 표현이 필요할 때)

---

### Collection과 Document

- Collection과 Document는 모두 리소스이며, URL에 표시된다.
- Document가 하나의 객체라면
- Collection은 객체의 집합이라고 이해하면 된다.
- Collection을 복수로 사용하면 직관적인 URL 설계에 도움이 된다.
  - 예) /creatores/1/products/3
