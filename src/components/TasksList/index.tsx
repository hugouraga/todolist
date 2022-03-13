import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ItemWrapper } from '../ItemWapper';
import { ListTasksProps } from './interface';
import { Container } from './styles';

import trashIcon from '../../assets/images/trash.png'

const TasksList: React.FC<ListTasksProps> = ({ tasks, removeTask, toggleTaskDone }) => {
    return (
        <Container>
            <FlatList
                data={tasks}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{ paddingBottom: 24 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 32}}
                renderItem={({ item, index }) => {
                    return (
                        <ItemWrapper index={index}>
                            <View>
                                <TouchableOpacity
                                    testID={`button-${index}`}
                                    activeOpacity={0.7}
                                //TODO - use onPress (toggle task) prop
                                >
                                    <View
                                        testID={`marker-${index}`}
                                    //TODO - use style prop
                                    >
                                        {item.done && (
                                            <Icon
                                                name="check"
                                                size={12}
                                                color="#FFF"
                                            />
                                        )}
                                    </View>

                                    <Text
                                    //TODO - use style prop
                                    >
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                testID={`trash-${index}`}
                                style={{ paddingHorizontal: 24 }}
                            //TODO - use onPress (remove task) prop
                            >
                                <Image source={trashIcon} />
                            </TouchableOpacity>
                        </ItemWrapper>
                    )
                }}

            />
        </Container>
    );
}

export default TasksList;