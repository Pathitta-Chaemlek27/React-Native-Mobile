
import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView,} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ประวัติส่วนตัว</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>ข้อมูลนักศึกษา</Text>

        <Text style={styles.info}>ชื่อ-สกุล: ปทิตตา แจ่มเหล็ก</Text>
        <Text style={styles.info}>รหัสนักศึกษา: 68319010017</Text>
        <Text style={styles.info}>สาขาวิชา: เทคโนโลยีสารสนเทศ</Text>

        <Text style={styles.heading}>ความสามารถ</Text>

        <Text style={styles.skill}>-  เล่นกีฬาเซปักตะกร้อ</Text>
        <Text style={styles.skill}>-  ทำงานบ้านได้</Text>
        <Text style={styles.skill}>-  ทำอาหารเป็น</Text>

        <Pressable
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>ติดต่อ</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F0FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2563eb',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 10,
    color: '#2563eb',
  },
  info: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333333',
  },
  skill: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
