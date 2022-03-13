import styled from 'styled-components/native';
import { RFValue } from '../../global/utils/reponsiveFontSize';

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${RFValue(6)}px;
    margin-left: ${RFValue(24)}px;
    margin-right: ${RFValue(24)}px;
    margin-top: ${RFValue(-28)}px;
    flex-direction: row;
    align-items: center;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: ${RFValue(54)}px;
    padding-left: ${RFValue(16)}px;
    padding-right: ${RFValue(16)}px;
    border-right-width: ${RFValue(1)}px;
    border-right-color: ${({ theme }) => theme.colors.gray_3};
    color: ${({ theme }) => theme.colors.gray_2};
`;

export const ButtonAdd = styled.TouchableOpacity`
    padding-left: ${RFValue(16)}px;
    padding-right: ${RFValue(16)}px;
`;