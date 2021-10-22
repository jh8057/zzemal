# SQL

## SELECT

- SELECT - column(열) 을 선택한다.
- FROM - 가져올 테이블을 작성한다.
- ORDER BY - 정렬 / ASC 오름차순 , DESC 내림차순이다.
- WHERE - 조건을 추가한다.
- LIMIT - 보여줄 데이터의 갯수를 제한한다.

## MAX,MIN

- MAX - 컬럼 내 최댓값을 반환해준다.
- MIN - 컬럼 내 최솟값을 반환해준다.
- COUNT - 컬럼의 데이터 갯수를 반환해준다.
- DISTINCT - 중복을 없애준다.

## GROUP BY

- GROUP BY - 동일한 이름의 데이터를 묶어서 나타낸다.
- HAVING - 그룹화 한 후 이를 기반으로 조건에 맞는 데이터를 추출한다.
- 컬럼의 이름을 정해주면 HAVING에서 사용할 수 있다.
- HAVING HOUR BETWEEN 9 AND 19
- HAVING HOUR > 8 AND HOUR < 20
- 이런식으로 조건을 줄 수 있다.
- SET @hour := -1 과 같이 변수를 선언 할 수 있다.
- SELECT (@hour := @hour+1) AS HOUR - 1씩 증가하면서 표시해준다.

## IS NULL

- IS NULL - NULL 인 부분을 찾는다.
- IS NOT NULL - NULL이 아닌 부분을 찾는다.
- IFNULL - NULL 인 경우를 처리한다.

## String,Date

- IN - 특정값 여러개를 선택하여 추출할 수 있다.
- WHERE (column) LIKE "%something%" - 문자열 안에 원하는 문자가 들어있는 데이터를 얻을 수 있다.
- CASE WHEN (조건) THEN (표시하고자 하는 결과1) ELSE (표시하고자 하는 결과2)END AS (컬럼이름) - 컬럼을 만들때 조건을 가지고 판별하여 새로운 표시를 하고 싶을때 사용
- 테이블을 2개 사용하고 싶으면 위 처럼 A ,B 이름을 나눠주고 객체처럼 불러오면 된다.
- DATE_FORMAT - 날짜를 지정한 형식으로 출력 가능하다.
