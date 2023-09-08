// import { useState } from 'react';
import { Tab } from './Tab';

export const TabList = () => {
  return (
    <div>
      <Tab label={'Tab-1(click me)'}>
        <p>Children of Tab1</p>
      </Tab>
      <Tab label={'Tab-2(click me)'}>
        <p>Children of Tab2</p>
      </Tab>
      <Tab label={'Tab-3(click me)'}>
        <p>Children of Tab3</p>
      </Tab>
    </div>
  );
};

// export const TabList = () => {
//   const [stateTabList, setStateTabList] = useState(false);
//   console.log(stateTabList);

//   const changeParentState = (newState) => {
//     setStateTabList(newState);
//   };
//   return (
//     <div>
//       {stateTabList ? (
//         <Tab onStateChange={changeParentState} label={'Tab-1(click me)'}>
//           <p>Content of Tab1</p>
//         </Tab>
//       ) : (
//         <Tab onStateChange={changeParentState} label={'Tab-1(click me)'} />
//       )}
//       {/* {stateTabList ? (
//         <Tab
//           onStateChange={changeParentState}
//           label={'Tab-2(click me)'}
//           children={<p>Content of Tab2</p>}
//         />
//       ) : (
//         <Tab
//           onStateChange={changeParentState}
//           label={'Tab-2(click me)'}
//           children={''}
//         />
//       )}
//       {stateTabList ? (
//         <Tab
//           onStateChange={changeParentState}
//           label={'Tab-3(click me)'}
//           children={<p>Content of Tab3</p>}
//         />
//       ) : (
//         <Tab
//           onStateChange={changeParentState}
//           label={'Tab-3(click me)'}
//           children={''}
//         />
//       )} */}
//
//     </div>
//   );
// };
