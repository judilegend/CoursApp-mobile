import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { colorHome } from "@/constants/themeHome";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Format d'email invalide")
      .required("L'email est requis"),
    password: yup
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est requis"),
  })
  .required();

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [authError, setAuthError] = React.useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setAuthError(null);

      // Simuler un délai d'authentification
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulation de validation - à remplacer par votre API
      const isValid = true;

      if (isValid) {
        reset();
        router.push("/home");
      }
    } catch (error) {
      setAuthError("Échec de la connexion. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo1.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>SIGN IN</Text>
      <Text style={styles.subtitle}>
        Welcome back! Please login to your account
      </Text>

      {authError && <Text style={styles.errorMessage}>{authError}</Text>}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              editable={!isLoading}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="Password"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              editable={!isLoading}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </>
        )}
      />

      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleSubmit(onSubmit)}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>LOGIN</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/register")}
        disabled={isLoading}
      >
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.linkText}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
  },
  logoContainer: {
    width: 200,
    height: 150,
    marginBottom: 20,
    alignSelf: "center",
    position: "relative",
    zIndex: 1,
  },
  logo: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0E3A50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "white",
  },
  inputError: {
    borderColor: "red",
  },
  button: {
    backgroundColor: colorHome.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
  linkText: {
    color: "#0E3A50",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 5,
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default LoginScreen;
