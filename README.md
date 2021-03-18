# Im_In-
rn w/ django rest framework

## 0313/second_commit

 - navigator
 - bottom tab navigator
 - navigation stack 작성 및 로딩화면 작성



## 0318/Navigation 내용정리
# 8.2 스택 네비게이션

가장 기본적인 내비게이션인 스택 내비게이션에 대해 배운다. 

- 스택 내비게이션은 일반적으로 가장 많이 사용되는 내비게이션으로, 현재 화면 위에 다른 화면을 쌓으면서 화면을 이동하는 것이 특징이다.
- 스택 내비게이션은 화면 위에 새로운 화면을 쌓으면서(push) 이동하기 떄문에 이전 화면을 계쏙 유지합니다. 이런 구조 때문에 가장 위에 있는 화면을 들어내면(pop) 이전화면으로 돌아갈 수 있다는 특징이 있다.

### 8.2.1 화면구성

먼저 screens 폴더 밑에 스택 내비게이션의 화면으로 상요할 화면을 만든다.

**./source/screens/Home.jsx**

```jsx
import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button
        title="Go to the list screen"
        onPress={() => navigation.navigate("List")}
      />
    </Container>
  );
};

export default Home;
```

**./src/screens/Item.jsx**

```jsx
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: cener;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Item = () => {
  return (
    <Container>
      <StyledText>Item</StyledText>
    </Container>
  );
};

export default Item;
```

**./src/screens/List.jsx**

```jsx
import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items = [
  { _id: 1, name: "React Native" },
  { _id: 2, name: "React Navigation" },
  { _id: 3, name: "LeeHyunDong" }
];

const List = () => {
  const _onPress = item => {};

  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(item => (
        <Button
          key={items._id}
          title={item.name}
          onPress={() => _onPress(item)}
        />
      ))}
    </Container>
  );
};

export default List;
```

**./src/screens/Index.jsx**

```jsx
import Home from "./Home";
import List from "./List";
import Item from "./Item";

export { Home, List, Item };
```

목록의 상세 정보를 보여주는 컴포넌트를 작성한다. navigation 폴더안에 stack.js 파일을 생성하고 생성된 컴포넌트를 이용해 스택 내비게이션을 구성한다.

**./src/navigations/Stack.jsx**

```jsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Item, List } from "../screens";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
```

가장 먼저 createStackNavigator 함수를 이용해서 스택 내비게이션을 생성한다. 생성된 스택 내비게이션에는 화면을 구성하는 screen 커뫂넌트와 screen 컴포넌트를 관리하는 Navigator 컴포넌트가 있다.

여기서 주의 해야할 내용은 Stack.Navigaor를 NavigationContainer 컴포넌트로 감싸줘야한다. 감싸주지 않으면 오류가 발생한다.

### 8.2.2 화면 이동

화면을 이동하는 방법에 대해 알아본다.

initialRouteName에 디폴트로 처음에 나오게 할 화면을 설정해준다. Screen 컴포넌트의 component로 지정된 컴포넌트는 화면으로 이용되고 navigation의 props로 전달된다. navigation에는 다양한 기능이 있는데 그중 navigate 함수는 원하는 화면으로 이동하는 데 사용되는 함수이다.

만약 이동하는 화면이 이전 화면의 상세 화면이라면, 상세 화면은 어떤 내용을 렌더링해야 하는지 전달받아야한다. navigate 함수를 이용할 때 두 번째 파라미터에 객체를 전달해서 이동하는 화면에 필요한 정보를 함께 전달하는 기능이 있다.

```jsx
./src/screens/List.jsx

import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

	..........

const List = ({navigation}) => {
  const _onPress = item => {
    navigation.navigate("Item", { id: item._id, name: item.name });
  };

	..........

};

export default List;
```

```jsx
./src/screens/Item.jsx

import React from "react";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Item = ({ route }) => {
  return (
    <Container>
      <StyledText>Item</StyledText>
      <StyledText>ID: {route.params.id}</StyledText>
      <StyledText>Name: {route.params.name}</StyledText>
    </Container>
  );
};

export default Item;
```

navigation에 있는 navigate함수를 이용해서 원하는 화면의 이름을 전달하면 해당 화면으로 이동합니다. 단, 전달되는 화면의 이름은 screen 컴포넌트의 name값 중 하나를 입력해야 한다.

이동하는 화면이 이전 화면의 상세화면이라면, 상세 화면은 어떤 내용을 렌더링해야 하는지 전달받아야 한다. navigate 함수를 이용할 때 두 번째 파라미터에 객체를 전달해서 이동하는 화면에 필요한 정보를 함께 전달하는 기능이 있다.

Item 화면으로 이동하면서 항목의 id와 name을 함께 전달하도록 작성했다. 전달된 내용은 컴포넌트의 props로 전달되는 route의 params를 통해 확인할 수 있다.

route를 통해서 데이터가 전달된다.

### 8.2.3 화면 배경색 수정하기

```jsx
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: "#000000" } }}>
	...
};
```

screenOptions에서 수정을 해줄 수 있다.

그러면 화면 전체에서의 배경화면 색을 변경할 수 있다.

### 8.2.4 헤더 수정하기

**타이틀 수정하기**

헤더의 타이틀은 Screen 컴포넌트의 name 속성을 기본 값으로 사용한다. 헤더의 타이틀을 변경하는 가장 쉬운 방법은 name을 원하는 값으로 수정하는 것이다.

```jsx
<Stack.Screen name="Detail" component={Item} />
```

```jsx
const List = ({ navigation }) => {
  const _onPress = item => {
    navigation.navigate("Detail", { id: item._id, name: item.name });
  };
	...
};
```

Screen의 name 속성을 변경하면 navigate함수내의 파라미터로 전달되는 name도 변경을 해줘야한다.

name 속성을 변경해주는 것은 편하지만 name 속성이 들어간 모든 부분을 수정해야한다는 단점이 있다.

name 속성을 변경했을 때의 단점을 피하면서 화면 타이틀을 변경하는 방법은 headerTitle 속성을 이용하는 것이다.

```jsx
./src/navigations/Stack.jsx
	
...
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerTitle: "List Screens"
        }}
      />
      <Stack.Screen name="Detail" component={Item} />
    </Stack.Navigator>
  );
};
```

모든 화면에서 같은 타이틀이 나타나도록 수정하고 싶다면 Navigator 컴포넌트의 screen options 속성에 header타이틀을 지정하면 된다.

**스타일 수정하기**

헤더 스타일을 수정하는 속성은 헤더의 배경색 등을 수정하는 headerStyle과 헤더의 타이틀 컴포넌트의 스타일을 수정하는 headerTitleStyle이 있습니다.

headerStyle과 headerTitleStyle 속성을 이용해서 모든 화면의 헤더 스타일을 변경해본다.

```jsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Item, List } from "../screens";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 110,
          backgroundColor: "#95a5a6",
          borderBottomWidth: 5,
          borderBottomColor: "#34495e"
        },
        headerTitleStyle: { color: "#ffffff, fontsize:26" }
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerTitle: "List Screens"
        }}
      />
      <Stack.Screen name="Detail" component={Item} />
    </Stack.Navigator>
  );
};
```

**타이틀 컴포넌트 변경**

타이틀에 문자열이 아닌 다른 것을 렌더링하고 싶다면 헤더의 타이틀을 변경하기 위해 문자열을 지정했던 headerTitle 속성에 컴포넌트를 반환하는 함수를 지정하면 타이틀 컴포넌트를 반환하는 컴포넌트로 변경할 수 있다. headerTitle에 함수가 설정되면 해당 함수의 파라미터로 style과 tintColor 등이 포함된 객체가 전달된다. 그중 style은 headerTitleStyle에 설정된 값이고, tintColor는 headerTintColor에 지정된 값이 전달됩니다.

```jsx
/.src/navigations/Stack.jsx

	...
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 110,
          backgroundColor: "#95a5a6",
          borderBottomWidth: 5,
          borderBottomColor: "#34495e"
        },
        headerTitleStyle: { color: "#ffffff, fontsize:26" },
        headerTitleAlign: "center",
        headerTitle: ({ style }) => (
          <MaterialCommunityIcons name="react" style={style} />
        )
      }}>
	....
```

함수의 파라미터로 전달되는 style을 이용하여 headerTitle에 지정한 스타일과 동일한 스타일이 적용되도록 작성했습니다. 반환되는 컴포넌트는 vector-icons에서 제공하는 컴포넌트를 이용해서 리액트 로고가 렌더링되도록 작성했다.

### 버튼 수정하기

스택 내비게이션에서 화면을 이동하면 헤더 왼쪽에 이전 화면으로 이동하는 뒤로 가기 버튼이 나타납니다. 만약 첫 화면처럼 이전 화면이 없는 경우에는 버튼이 생기지 않는다. 뒤로가기 버튼을 이용하는 방법외에 화면 왼쪽 끝에서 오른쪽 방향으로 스와이프 제스쳐를 통해 이전화면으로 돌아가는 방법도 있다.  이번에는 헤더 왼쪽에 있는 버튼을 수정하는 방법을 알아본다.

스택 스크린을 수정해준다.

```jsx
<Stack.Screen
        name="List"
        component={List}
        options={{
          headerTitle: "List Screens",
          headerBackTitleVisible: true
        }}
      />
```

### 버튼 스타일 수정하기

버튼의 타이틀도 헤더의 타이틀처럼 우리가 원하는 스타일을 지정할 수 있다. headerBackTitleStyle을 이용하면 글자의 색뿐만 아니라 글자 크기  등 다양한 스타일을 지정할 수 있지만 버튼의 타이틀에만 적용된다. 버튼의 타이틀과 이미지의 색을 동일하게 변경하려면 headerTintColor를 이용해야한다.

headerTintColor에 지정된 색은 버튼 뿐만 아니라 헤더의 타이틀에도 적용되지만, headerTitleStyle혹은 headerBackTitleStyle이 우선순위가 높으므로 headerTintColor에 설정한 색으로 나타나게 하고 싶다면 다른 스타일과 곂치지 않도록 작성해야 한다.

```jsx
<Stack.Screen
        name="List"
        component={List}
        options={{
          headerTitle: "List Screens",
          headerBackTitleVisible: true,
          headerBackTitle: "prev", //이전으로 가기의 이름을 정할 수 있다.
          headerTitleStyle: { fontSize: 24 },
          headerTintColor: "#e74c3c"
        }}
      />
```

### 버튼 컴포넌트 변경

### 헤더 감추기

**headerMode**

- float
    - 헤더가 상단에 유지되며 하나의 헤더를 사용합니다.
- screen
    - 각 화면마다 헤더를 가지며 화면 변경과 함께 나타나거나 사라진다.
- none
    - 헤더가 렌더링되지 않는다.

```jsx

```
