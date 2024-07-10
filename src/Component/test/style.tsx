// import styled, { css } from "styled-components";
// import dasd  from
// // type
// import type { Props } from ".";
// // (1) Pick<T, K>
// type StyledProps = Pick<Props, "size" | "bgColor">;

// // (1) <StyledProps>
// const StyledBox = styled.div<StyledProps>`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: ${({ bgColor }) => bgColor};

//   /* (2) theme */
//   font-size: ${({ theme, size }) => theme.fontSize};
//   font-weight: bold;

//   border-radius: 0.4em;

//   ${({ size }) => {
//     switch (size) {
//       case "xs":
//         return css`
//           width: 200px;
//           height: 200px;
//         `;
//       case "sm":
//         return css`
//           width: 240px;
//           height: 240px;
//         `;
//       case "md":
//         return css`
//           width: 280px;
//           height: 280px;
//         `;
//       case "lg":
//         return css`
//           width: 320px;
//           height: 320px;
//         `;
//       case "xl":
//         return css`
//           width: 360px;
//           height: 360px;
//         `;
//       case "2xl":
//         return css`
//           width: 400px;
//           height: 400px;
//         `;
//     }
//   }}
// `;

// export default StyledBox;
