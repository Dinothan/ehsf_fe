import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
  Box,
  VStack,
  Avatar,
  FlatList,
  Heading,
  HStack,
  Text,
  Spacer,
} from 'native-base';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import * as axiosCommon from '../../axios/axios-common';
import {connect} from 'react-redux';

const MyDietScreen = () => {
  useEffect(() => {
    myDietPlan();

    let url =
      '';
    axiosCommon.axiosGET(url, res => {
      console.log('results:', res.responseDto.data.hits);
    });
  }, []);

  const myDietPlan = () => {};

  return (
    <View style={{flex: 1}}>
      <Card />
    </View>
  );
};

const Card = () => {
  const data = [
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Morning Snack',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl: require('../../assets/images/diet/m-snack.png'),
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Breakfast',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl: require('../../assets/images/diet/breakfast.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Afternoon Snack',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: require('../../assets/images/diet/a-snack.png'),
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Lunch',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      avatarUrl: require('../../assets/images/diet/lunch.png'),
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Evening Snack',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl: require('../../assets/images/diet/e-snack.png'),
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d7',
      fullName: 'Dinner',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl: require('../../assets/images/diet/dinner.png'),
    },
  ];
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Today
      </Heading>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Collapse
          //   isExpanded={true}
          >
            <CollapseHeader>
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2">
                <HStack space={3} justifyContent="space-between">
                  <Avatar size="48px" source={item.avatarUrl} />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.fullName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.recentText}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                </HStack>
              </Box>
            </CollapseHeader>
            <CollapseBody
              style={{
                padding: 10,
                backgroundColor: '#EDEDED',
              }}>
              <Text>Food card</Text>
            </CollapseBody>
          </Collapse>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    bmi: state.user.bmi,
  };
};

export default connect(mapStateToProps, null)(MyDietScreen);
