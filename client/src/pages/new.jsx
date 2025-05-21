import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
  Typography,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import { Upload, Trash2, ImagePlus } from "lucide-react"; // Updated imports

export function NewPropertyForm() {
  const [images, setImages] = useState([]);
  const [tab, setTab] = useState("details");

  const handleImageUpload = () => {
    const newImage = `/placeholder.svg?height=400&width=600&text=Property+Image+${images.length + 1}`;
    setImages([...images, newImage]);
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add New Property
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <Button
          variant={tab === "details" ? "contained" : "outlined"}
          onClick={() => handleTabChange("details")}
        >
          Property Details
        </Button>
        <Button
          variant={tab === "location" ? "contained" : "outlined"}
          onClick={() => handleTabChange("location")}
        >
          Location
        </Button>
        <Button
          variant={tab === "media" ? "contained" : "outlined"}
          onClick={() => handleTabChange("media")}
        >
          Media
        </Button>
      </Box>

      {tab === "media" && (
        <Card>
          <CardHeader
            title="Property Media"
            subheader="Upload photos and videos of the property."
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Property Images</Typography>
                <Grid container spacing={2}>
                  {images.map((image, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      <Box
                        sx={{
                          position: "relative",
                          height: 150,
                          borderRadius: 1,
                          overflow: "hidden",
                          border: "1px solid gray",
                        }}
                      >
                        <img
                          src={image}
                          alt={`Property ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <IconButton
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            backgroundColor: "rgba(255,255,255,0.8)",
                          }}
                          onClick={() =>
                            setImages(images.filter((_, i) => i !== index))
                          }
                        >
                          <Trash2 size={16} /> {/* Lucide Trash Icon */}
                        </IconButton>
                      </Box>
                    </Grid>
                  ))}
                  <Grid item xs={6} sm={4}>
                    <Box
                      sx={{
                        height: 150,
                        borderRadius: 1,
                        border: "1px dashed gray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={handleImageUpload}
                    >
                      <ImagePlus size={24} /> {/* Lucide Add Image Icon */}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Virtual Tour</Typography>
                <TextField
                  fullWidth
                  label="Virtual Tour URL"
                  placeholder="e.g. https://example.com/virtual-tour"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Floor Plan</Typography>
                <Box
                  sx={{
                    height: 150,
                    borderRadius: 1,
                    border: "1px dashed gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Upload size={24} /> {/* Lucide Upload Icon */}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              onClick={() => handleTabChange("location")}
            >
              Previous: Location
            </Button>
            <Button variant="contained">Publish Listing</Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
}