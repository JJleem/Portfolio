import React from "react";
import {
  Container,
  DirectoryBox,
  DirectoryDesc,
  DirectoryDescContainer,
  DirectoryDescSub,
  DirectoryGoback,
  DirectorySection,
  DirectorySub,
  DirectoryTItle,
  DirectoryTitle,
  DirectoryWrap,
  LogoContainer,
} from "./StyleDirectory";
import { Goback } from "../detail/StyleDetail";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/footer/Footer";
import { MainLogo } from "../mainhome/StyleMainHome";
import { Helmet } from "react-helmet";

const Directory = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Helmet title="Directory | Frontend-developer Portfolio"></Helmet>
      <DirectoryBox>
        <DirectorySection>
          <DirectoryGoback>
            <Goback onClick={goback}>
              <div></div>
            </Goback>
          </DirectoryGoback>
          <DirectoryWrap>
            <DirectoryTitle>
              📦src
              <br />
              ┣ 📂@types
              <br />
              ┃ ┣ 📜image.d.ts
              <br />
              ┃ ┗ 📜styled.d.ts
              <br />
              ┣ 📂assets
              <br />
              ┃ ┣ 📂img
              <br />
              ┃ ┃ ┣ 📂bg
              <br />
              ┃ ┃ ┣ 📂icon
              <br />
              ┃ ┃ ┣ 📂item
              <br />
              ┃ ┃ ┣ 📂logo
              <br />
              ┃ ┃ ┗ 📂skill
              <br />
              ┃ ┣ 📂theme
              <br />
              ┃ ┃ ┣ 📜global-style.ts
              <br />
              ┃ ┃ ┗ 📜theme.ts
              <br />
              ┃ ┗ 📂three
              <br />
              ┃ ┃ ┗ 📜CloudAnimation.tsx
              <br />
              ┣ 📂atom
              <br />
              ┃ ┗ 📜atom.ts
              <br />
              ┣ 📂Component
              <br />
              ┃ ┣ 📂activity
              <br />
              ┃ ┃ ┣ 📜Activity.tsx
              <br />
              ┃ ┃ ┗ 📜StyleActivity.tsx
              <br />
              ┃ ┣ 📂aside
              <br />
              ┃ ┃ ┣ 📜Gaside.tsx
              <br />
              ┃ ┃ ┗ 📜StyleGaside.tsx
              <br />
              ┃ ┣ 📂box
              <br />
              ┃ ┃ ┣ 📜Box.tsx
              <br />
              ┃ ┃ ┗ 📜StyleBox.tsx
              <br />
              ┃ ┣ 📂btn
              <br />
              ┃ ┃ ┣ 📜Btn.tsx
              <br />
              ┃ ┃ ┗ 📜StlyeBtn.tsx
              <br />
              ┃ ┣ 📂contact
              <br />
              ┃ ┃ ┣ 📜Contact.tsx
              <br />
              ┃ ┃ ┗ 📜StyleContact.tsx
              <br />
              ┃ ┣ 📂footer
              <br />
              ┃ ┃ ┣ 📜Footer.tsx
              <br />
              ┃ ┃ ┗ 📜StlyeFooter.tsx
              <br />
              ┃ ┣ 📂gnb
              <br />
              ┃ ┃ ┣ 📜ExploreGnb.tsx
              <br />
              ┃ ┃ ┣ 📜Gnb.tsx
              <br />
              ┃ ┃ ┣ 📜StyledExploreGnb.tsx
              <br />
              ┃ ┃ ┣ 📜StyleGnb.tsx
              <br />
              ┃ ┃ ┗ 📜WhichGnb.tsx
              <br />
              ┃ ┣ 📂introduction
              <br />
              ┃ ┃ ┣ 📜Introduction.tsx
              <br />
              ┃ ┃ ┗ 📜StyleIntroduction.tsx
              <br />
              ┃ ┣ 📂itemTabs
              <br />
              ┃ ┃ ┗ 📜ItemTabs.tsx
              <br />
              ┃ ┣ 📂mainproject
              <br />
              ┃ ┃ ┣ 📜MainProject.tsx
              <br />
              ┃ ┃ ┗ 📜StyleMainProject.tsx
              <br />
              ┃ ┣ 📂skillstack
              <br />
              ┃ ┃ ┣ 📜SkillStack.tsx
              <br />
              ┃ ┃ ┗ 📜StyleSkillStack.tsx
              <br />
              ┃ ┗ 📂topbtn
              <br />
              ┃ ┃ ┗ 📜TopBtn.tsx
              <br />
              ┣ 📂data
              <br />
              ┃ ┣ 📜db.d.ts
              <br />
              ┃ ┗ 📜db.json
              <br />
              ┣ 📂pages
              <br />
              ┃ ┣ 📂collection
              <br />
              ┃ ┃ ┣ 📜Collection.tsx
              <br />
              ┃ ┃ ┗ 📜StyleCollection.tsx
              <br />
              ┃ ┣ 📂detail
              <br />
              ┃ ┃ ┣ 📜Detail.tsx
              <br />
              ┃ ┃ ┗ 📜StyleDetail.tsx
              <br />
              ┃ ┣ 📂directory
              <br />
              ┃ ┃ ┣ 📜Directory.tsx
              <br />
              ┃ ┃ ┗ 📜StyleDirectory.tsx
              <br />
              ┃ ┗ 📂mainhome
              <br />
              ┃ ┃ ┣ 📜CurrentTime.tsx
              <br />
              ┃ ┃ ┣ 📜MainHome.tsx
              <br />
              ┃ ┃ ┗ 📜StyleMainHome.tsx
              <br />
              ┣ 📜App.tsx
              <br />
              ┗ 📜index.tsx
              <br />
            </DirectoryTitle>
            <DirectoryDescContainer>
              <DirectoryDesc>
                <DirectoryTItle>Directory</DirectoryTItle>
                <DirectorySub>
                  <ul>
                    <li>
                      <span>@types: </span>
                      TypeScript 타입 정의 파일들이 포함되어 있습니다. 여기에는
                      image.d.ts와 styled.d.ts가 있습니다.
                    </li>
                    <li>
                      <span>assets: </span>
                      프로젝트에 사용되는 이미지, 테마, 애니메이션 등의 리소스
                      파일들이 포함되어 있습니다.
                    </li>

                    <li>
                      <span>atom: </span>
                      Recoil 라이브러리를 사용하여 상태 관리를 하여서
                      Atom파일들이 포함되어있습니다.
                    </li>
                    <li>
                      <span> Component: </span>
                      프로젝트의 모든 React 컴포넌트들이 포함되어 있습니다. 각
                      컴포넌트는 별도의 디렉토리에 있으며, 컴포넌트 파일과
                      스타일 파일이 함께 있습니다.
                    </li>
                    <li>
                      <span> data: </span>
                      프로젝트에 사용되는 데이터 파일들이 포함되어 있습니다.
                      여기에는 db.d.ts와 db.json 파일이 있습니다.
                    </li>
                    <li>
                      <span> pages: </span>
                      프로젝트의 페이지 컴포넌트들이 포함되어 있습니다. 각
                      페이지는 별도의 디렉토리에 있으며, 페이지 컴포넌트 파일과
                      스타일 파일이 함께 있습니다.
                    </li>
                    <li>
                      <span> App.tsx: </span>
                      프로젝트의 루트 컴포넌트입니다.
                    </li>
                    <li>
                      <span> index.tsx: </span>
                      프로젝트의 진입점입니다. 여기에서 React 애플리케이션이
                      렌더링됩니다.
                    </li>
                  </ul>
                </DirectorySub>
              </DirectoryDesc>
              <DirectoryDescSub>
                <DirectoryTItle>Directory 장점</DirectoryTItle>
                <ul>
                  <li>
                    <span>모듈성: </span>
                    폴더 구조를 통해 관련된 파일들을 그룹화하여 관리할 수
                    있습니다. 이는 프로젝트 규모가 커질수록 코드 관리를 용이하게
                    합니다.
                  </li>
                  <li>
                    <span>가독성: </span>
                    폴더 구조와 파일 이름 규칙을 통해 프로젝트의 구조를 쉽게
                    이해할 수 있습니다.
                  </li>
                  <li>
                    <span>확장성: </span>
                    새로운 기능을 추가할 때 관련된 파일들을 적절한 폴더에 추가할
                    수 있어 프로젝트 구조를 유지할 수 있습니다.
                  </li>
                  <li>
                    <span>테스트 및 디버깅: </span>
                    파일 구조가 명확하므로 문제가 발생했을 때 관련 파일을 쉽게
                    찾을 수 있습니다.
                  </li>
                </ul>
              </DirectoryDescSub>
              <LogoContainer>
                <MainLogo></MainLogo>
              </LogoContainer>
            </DirectoryDescContainer>
          </DirectoryWrap>
        </DirectorySection>
      </DirectoryBox>
      <Footer />
    </Container>
  );
};

export default Directory;
