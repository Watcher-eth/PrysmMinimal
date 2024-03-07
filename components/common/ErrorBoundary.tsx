import React from "react";
import { View, Text, Button } from "react-native";

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    // Log the error to the console for now
    console.log(error, errorInfo);
  }

  handleTryAgain = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Something went wrong.</Text>
          <Button title="Try Again" onPress={this.handleTryAgain} />
        </View>
      );
    }

    return this.props.children;
  }
}
