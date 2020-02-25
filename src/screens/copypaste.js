<Text style={styles.textStyle} h4>Registrati al Tracker</Text>
<Spacer />
<Input
  placeholder="Email"
  value={email}
  onChangeText={setEmail}
  autoCapitalize='none'
  autoCorrect={false}
 />
<Spacer />
<Input
  secureTextEntry
  placeholder="Password"
  value={password}
  onChangeText={setPassword}
  autoCapitalize='none'
  autoCorrect={false}
/>

{state.errorMessage ? <Text style={styles.errorStyle}>{state.errorMessage}</Text> : null}
<Spacer />
<Button style={styles.buttonStyle} title="Signup" onPress={()=> signup({email, password})} />
