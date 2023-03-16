import {
  FlatList,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MyText } from "../../MyText";
import { useState } from "react";
import { styles } from "./style";
import closeIcon from "../../../../assets/icons/close.png";
import magnifyingIcon from "../../../../assets/icons/magnifying.png";
import addGreenIcon from "../../../../assets/icons/add_green.png";
import greenCheckIcon from "../../../../assets/icons/check_green.png";
import prizeIcon from "../../../../assets/icons/prize.png";
import { useContextValue } from "../../../services/contextElement";
import api from "../../../services/api";
import { useNavigation } from "@react-navigation/native";

interface NewGroupProps {
  phase?: number;
}

export function NewGroup({ phase }: NewGroupProps) {
  const [name, setName] = useState<string>("");
  const [usersInvited, setUsersInvited] = useState<string[]>([]);
  const [prize, setPrize] = useState<string>("");

  const [userSearch, setUserSearch] = useState<string>("");
  const [formPhase, setFormPhase] = useState<number>(phase ? phase : 1);
  const [refresh, setRefresh] = useState<boolean>(false);
  const { setIsNewGroupWindowCollapsed, user, globalUsers } = useContextValue();
  const navigation = useNavigation();

  function handleInvite(id: string) {
    let aux = [...usersInvited];
    if (usersInvited.includes(id)) {
      aux.splice(aux.indexOf(id), 1);
    } else aux.push(id);
    setUsersInvited(aux);
  }

  async function handleSubmit() {
    try {
      const response = await api.post("/group", {
        adminId: user.id,
        participants: [...usersInvited, user.id],
        name,
        prize,
      });

      navigation.navigate("home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <MyText style={styles.containerTitle}>Novo grupo de Aposta</MyText>
        <TouchableOpacity
          style={styles.closeIconContainer}
          onPress={() => setIsNewGroupWindowCollapsed(true)}
        >
          <Image style={styles.closeIcon} source={closeIcon} />
        </TouchableOpacity>
      </View>

      {formPhase == 1 ? (
        <View style={styles.formContainer}>
          <MyText style={styles.formTitle}>Dê um nome para o seu grupo</MyText>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.textInput}
            placeholder="Ex.: Família, amigos, etc."
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setFormPhase(2)}>
              <MyText style={styles.buttonText}>Continuar</MyText>
            </TouchableOpacity>
          </View>
        </View>
      ) : formPhase == 2 ? (
        <View style={styles.formContainer}>
          <MyText style={styles.formTitle}>
            Selecione quem vai estar no grupo
          </MyText>

          <View style={styles.userSearchListContainer}>
            <Image style={styles.magnifyingIcon} source={magnifyingIcon} />
            <TextInput
              value={userSearch}
              onChangeText={(e) => {
                setRefresh(!refresh);
                setUserSearch(e);
              }}
              style={styles.textInputUserList}
              placeholder="Buscar contato"
            />
          </View>

          <View style={styles.userListContainer}>
            <MyText style={styles.userListTitle}>
              Seus contatos do telefone
            </MyText>

            <FlatList
              data={[]}
              renderItem={() => <></>}
              horizontal={true}
              ListEmptyComponent={() => (
                <FlatList
                  data={globalUsers.filter(({ user }) =>
                    user.name
                      .toUpperCase()
                      .trim()
                      .normalize("NFD")
                      .replace(/\p{Diacritic}/gu, "")
                      .includes(
                        userSearch
                          .toUpperCase()
                          .trim()
                          .normalize("NFD")
                          .replace(/\p{Diacritic}/gu, "")
                      )
                  )}
                  extraData={refresh}
                  keyExtractor={(item) => item.user.id}
                  contentContainerStyle={{
                    paddingTop: 20,
                    gap: 10,
                  }}
                  renderItem={({ item }) => (
                    <View style={styles.userItem}>
                      <View style={styles.userPhotoAndNameContainer}>
                        <Image
                          style={styles.userPhoto}
                          source={{ uri: item.user.picture }}
                        />
                        <MyText style={styles.userName}>
                          {item.user.name}
                        </MyText>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleInvite(item.user.id)}
                      >
                        <View style={styles.iconContainer}>
                          {!usersInvited.includes(item.user.id) ? (
                            <Image
                              style={styles.inviteIcon}
                              source={addGreenIcon}
                            />
                          ) : (
                            <Image
                              style={styles.checkIcon}
                              source={greenCheckIcon}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              )}
            />
          </View>

          <View style={{ ...styles.buttonContainer, marginBottom: 200 }}>
            <TouchableOpacity
              onPress={() => {
                if (!phase) setFormPhase(3);
                else setIsNewGroupWindowCollapsed(true);
              }}
            >
              <MyText style={styles.buttonText}>Continuar</MyText>
            </TouchableOpacity>
          </View>
        </View>
      ) : formPhase == 3 ? (
        <View style={styles.formContainer}>
          <Image source={prizeIcon} style={styles.prizeIcon} />
          <MyText style={styles.formTitle}>
            Defina um prêmio para quem ganhar
          </MyText>

          <TextInput
            value={prize}
            onChangeText={setPrize}
            style={styles.textInput}
            placeholder="Digite aqui o prêmio ou o valor"
          />

          <View style={styles.buttonContainerFinalPhase}>
            <TouchableOpacity
              onPress={() => {
                setFormPhase(1);
                setUsersInvited([]);
                setName("");
                setPrize("");
                setIsNewGroupWindowCollapsed(true);
              }}
            >
              <MyText style={styles.buttonTextCancel}>Cancelar</MyText>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit}>
              <MyText style={styles.buttonText}>Finalizar</MyText>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </ScrollView>
  );
}
