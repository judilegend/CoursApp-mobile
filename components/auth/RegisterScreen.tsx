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
    fullName: yup.string().required("Le nom complet est requis"),
    email: yup
      .string()
      .email("Format d'email invalide")
      .required("L'email est requis"),
    password: yup
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est requis"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas")
      .required("La confirmation du mot de passe est requise"),
  })
  .required();

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [registerError, setRegisterError] = React.useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setRegisterError(null);

      // Simuler un délai d'enregistrement
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulation de création de compte - à remplacer par votre API
      const isCreated = true;

      if (isCreated) {
        reset();
        router.push("/home");
      }
    } catch (error) {
      setRegisterError("Échec de l'inscription. Veuillez réessayer.");
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

      <Text style={styles.title}>SIGN UP</Text>
      <Text style={styles.subtitle}>
        Create your account to start your journey
      </Text>

      {registerError && (
        <Text style={styles.errorMessage}>{registerError}</Text>
      )}

      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[styles.input, errors.fullName && styles.inputError]}
              placeholder="Full Name"
              onChangeText={onChange}
              value={value}
              editable={!isLoading}
            />
            {errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName.message}</Text>
            )}
          </>
        )}
      />

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

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[
                styles.input,
                errors.confirmPassword && styles.inputError,
              ]}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              editable={!isLoading}
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>
                {errors.confirmPassword.message}
              </Text>
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
          <Text style={styles.buttonText}>SIGN UP</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/login")}
        disabled={isLoading}
      >
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.linkText}>Sign in here</Text>
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

export default RegisterScreen;
