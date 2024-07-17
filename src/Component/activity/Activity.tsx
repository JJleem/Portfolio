import React from "react";
import {
  ItemContainer,
  ItemSection,
} from "../../pages/collection/StyleCollection";
import {
  ActivityInner,
  ActivityItemSection,
  ActivityItemWraper,
  ActivitySection,
  ActivityText,
  ActivityTitle,
  ActivityType,
  ActivityWrapper,
} from "./StyleActivity";
import book from "../../assets/img/icon/book.png";
import school from "../../assets/img/icon/flag.png";
import calandar from "../../assets/img/icon/calendar.png";
import company from "../../assets/img/icon/company.png";
import person from "../../assets/img/icon/person.png";
import check from "../../assets/img/icon/checkk.png";
import major from "../../assets/img/icon/major.png";
import schools from "../../assets/img/icon/school.png";
const Activity = () => {
  return (
    <ItemContainer>
      <ActivityItemSection>
        <ActivityItemWraper>
          <ActivityType className="firstType">교육 연수</ActivityType>
          <ActivityWrapper>
            <ActivityInner>
              <ActivityTitle>교육 과정</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={book} className="study">
                  <span></span>서울형 뉴딜 일자리사업 모던 웹 풀스택 개발자
                  실무과정
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={book} className="study">
                  <span></span>스마트 웹콘텐츠 UI/UX 퍼블리셔&프론트엔드_B
                </ActivityText>
              </ActivitySection>
            </ActivityInner>

            <ActivityInner>
              <ActivityTitle>교육 기관</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={school}>
                  <span></span>한국경영혁신중소기업협회
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={school}>
                  <span></span>이젠아카데미DX교육센터
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
            <ActivityInner>
              <ActivityTitle>교육 기간</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={calandar}>
                  <span></span> 24.07.01~24.08.16
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={calandar}>
                  <span></span> 23.12.29~24.06.13
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
          </ActivityWrapper>
        </ActivityItemWraper>
        <ActivityItemWraper>
          <ActivityType>경력 사항</ActivityType>
          <ActivityWrapper>
            <ActivityInner>
              <ActivityTitle>기관 명</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={company}>
                  <span></span>(주)미디어그룹 사람과숲
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={company}>
                  <span></span>영전엔지니어링주식회사
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={company}>
                  <span></span>주식회사 이음데이터
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
            <ActivityInner>
              <ActivityTitle>담당 업무</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={person}>
                  <span></span>영업지원부
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={person}>
                  <span></span>전기가설(주임)
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={person}>
                  <span></span>데이터관리 매니저
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
            <ActivityInner>
              <ActivityTitle>활동 기간</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={calandar}>
                  <span></span>2022.10.04~2024.01.01
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={calandar}>
                  <span></span>2020.10.12~2022.02.06
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={calandar}>
                  <span></span>2019.08.26~2019.10.22
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
          </ActivityWrapper>
        </ActivityItemWraper>
        <ActivityItemWraper>
          <ActivityType>학력 사항</ActivityType>
          <ActivityWrapper>
            <ActivityInner>
              <ActivityTitle>출신 학교</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={schools}>
                  <span></span>인천폴리텍대학교 인천캠퍼스
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={schools}>
                  <span></span>신도림고등학교
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
            <ActivityInner>
              <ActivityTitle>학과</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={major}>
                  <span></span>정보통신학과
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={major}>
                  <span></span>
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
            <ActivityInner>
              <ActivityTitle>기간</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={calandar}>
                  <span></span>2017.03~2021.02
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={calandar}>
                  <span></span>2014.03~2017.02
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
            <ActivityInner>
              <ActivityTitle>구분</ActivityTitle>
              <ActivitySection>
                <ActivityText logo={check}>
                  <span></span>졸업
                </ActivityText>
              </ActivitySection>
              <ActivitySection>
                <ActivityText logo={check}>
                  <span></span>졸업
                </ActivityText>
              </ActivitySection>
            </ActivityInner>
          </ActivityWrapper>
        </ActivityItemWraper>
      </ActivityItemSection>
    </ItemContainer>
  );
};

export default Activity;
