import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  Clock,
  Message,
  ArchiveAdd,
  Home,
  Messages,
  ArchiveTick,
  UserSquare,
} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CODE CHALLANGE.</Text>
      </View>

      <View style={styles.rows}>
        <TextInputTest />
        <Button title="Search" style={styles.submit} />
      </View>

      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Popular
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Latest</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Landing Page</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Component</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Social Media</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Music</Text>
          </View>
        </ScrollView>
      </View>

      <ScrollView>
        <Text style={category.title2}>Easy (1)</Text>
        <ListBlog1 />

        <Text style={category.title2}>Normal (3)</Text>
        <ListBlog2 />

        <Text style={category.title2}>Hard (5)</Text>
        <ListBlog3 />

        <Text style={category.title2}>Advance (3)</Text>
        <ListBlog4 />
      </ScrollView>

      <View style={footer.footer}>
        <View style={footer.center}>
          <Home size="32" variant="Bold" color={colors.blue()} />
          <Text style={footer.textBold}>Bearanda</Text>
        </View>

        <View style={footer.center}>
          <ArchiveTick size="32" color={colors.blue(0.5)} />
          <Text style={footer.text}>Bookmark</Text>
        </View>

        <View style={footer.center}>
          <Messages size="32" color={colors.blue(0.5)} />
          <Text style={footer.text}>Chat</Text>
        </View>

        <View style={footer.center}>
          <UserSquare size="32" color={colors.blue(0.5)} />
          <Text style={footer.text}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const ListBlog1 = () => {
  return (
    // <ScrollView>
    <View style={styles.listBlog}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 16}}>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Ftwitter-embed.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Social Media</Text>
                <Text style={itemVertical.cardTitle}>Twitter Embed</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    /* </ScrollView> */
  );
};

const ListBlog2 = () => {
  return (
    // <ScrollView>
    <View style={styles.listBlog}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 16}}>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fholadok.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>Holadok</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2022</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>45 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fal-nasr.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>Al Nasr</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fdressly.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>DressLy</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    /* </ScrollView> */
  );
};

const ListBlog3 = () => {
  return (
    // <ScrollView>
    <View style={styles.listBlog}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 16}}>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fnowted-app.png&w=1200&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Life</Text>
                <Text style={itemVertical.cardTitle}>Nowted App</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2022</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>45 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fal-nasr.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>Al Nasr</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fdressly.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>DressLy</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fal-nasr.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>Al Nasr</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fdressly.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>DressLy</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    /* </ScrollView> */
  );
};

const ListBlog4 = () => {
  return (
    // <ScrollView>
    <View style={styles.listBlog}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 16}}>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fholadok.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>Holadok</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2022</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>45 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fal-nasr.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>Al Nasr</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fdressly.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>DressLy</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fal-nasr.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>Al Nasr</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
        <View style={itemVertical.cardItem}>
          <Image
            style={itemVertical.cardImage}
            source={{
              uri: 'https://codedesign.dev/_next/image?url=%2Fdressly.png&w=1920&q=75',
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={itemVertical.cardCategory}>Landing Page</Text>
                <Text style={itemVertical.cardTitle}>DressLy</Text>
              </View>
              <ArchiveAdd color={colors.grey(0.6)} variant="Linear" size={20} />
            </View>
            <View style={itemVertical.cardInfo}>
              <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
              <Message size={10} variant="Linear" color={colors.grey(0.6)} />
              <Text style={itemVertical.cardText}>89 Participant</Text>
            </View>
            <Text style={itemVertical.cardTitle1}>View Challange</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    /* </ScrollView> */
  );
};

const TextInputTest = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="ascii-capable"
      />
    </SafeAreaView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    marginLeft: 24,
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    width: 370,
    marginLeft: 24,
    marginRight: 24,
    padding: 10,
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  // cardItemLast: {
  //   width: 370,
  //   padding: 10,
  //   backgroundColor: colors.blue(0.03),
  //   flexDirection: 'row',
  //   borderRadius: 10,
  // },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardTitle1: {
    borderRadius: 5,
    textAlign: 'center',
    padding: 5,
    backgroundColor: colors.blue(0.1),
    fontSize: 12,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    height: 40,
    width: 275,
    marginLeft: 24,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.grey(0.4),
    color: colors.grey(0.8),
  },
  rows: {
    width: '100%',
    gap: 20,
    flexDirection: 'row',
  },
});

const footer = StyleSheet.create({
  footer: {
    bottom: 0,
    padding: 20,
    borderRadius: 0,
    flexDirection: 'row',
    backgroundColor: colors.white(),
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.blue(0.1),
  },
  center: {
    alignItems: 'center',
  },
  text: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.black(0.5),
  },
  textBold: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black(),
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
  title2: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    paddingLeft: 24,
    paddingBottom: 6,
  },
});
