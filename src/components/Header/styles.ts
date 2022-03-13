import styled from 'styled-components/native';
import { RFValue } from '../../global/utils/reponsiveFontSize';
import { taskDetailsProps } from './interface';
import { textDetailsVariants } from './variants';

export const Container = styled.View`
    padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(60)}px ${RFValue(16)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Tasks = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TaskDetail = styled.Text<taskDetailsProps>`
    font-size: ${RFValue(15)}px;
    color: #fff;
    ${({ weight }) => textDetailsVariants[weight]};
`;