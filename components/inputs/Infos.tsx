/* eslint-disable prettier/prettier */
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Input, XStack } from 'tamagui';

interface InfosProps {
  placeholder: string;
  onEdit?: (isEditing: boolean) => void; // Optional callback for edit state
  // Spread any additional Input props
  [key: string]: any;
}

const Infos: React.FC<InfosProps> = ({
  placeholder,

  onEdit,
  ...inputProps
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    onEdit && onEdit(isEditing);
  };
  return (
    <XStack
      alignItems="center"
      space="$3"
      marginVertical="$3"
      backgroundColor="#F8F8F8"
      borderRadius={9}
      borderColor="#F2F2F2"
      borderWidth={1}
      paddingHorizontal={7}
      paddingVertical={2}>
      <Input
        flex={1}
        size="$3"
        placeholder={placeholder}
        borderWidth={0}
        editable={isEditing}
        onBlur={() => !isEditing && inputProps.ref?.current?.blur()}
        {...inputProps}
      />
      <FontAwesome5
        name={isEditing ? 'pen' : 'lock'}
        size={20}
        color="black"
        onPress={handleEditClick}
      />
    </XStack>
  );
};

export default Infos;
