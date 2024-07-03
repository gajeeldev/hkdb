export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          achievement: string
          created_at: string
          description: string
          id: string
          images: string[]
        }
        Insert: {
          achievement: string
          created_at?: string
          description: string
          id?: string
          images: string[]
        }
        Update: {
          achievement?: string
          created_at?: string
          description?: string
          id?: string
          images?: string[]
        }
        Relationships: []
      }
      areas: {
        Row: {
          area: string
          created_at: string
          description: string
          game_description: string
          how_to_access: string
          id: string
          images: string[]
          lore: string
        }
        Insert: {
          area: string
          created_at?: string
          description: string
          game_description: string
          how_to_access: string
          id?: string
          images: string[]
          lore: string
        }
        Update: {
          area?: string
          created_at?: string
          description?: string
          game_description?: string
          how_to_access?: string
          id?: string
          images?: string[]
          lore?: string
        }
        Relationships: []
      }
      bosses: {
        Row: {
          boss: string
          created_at: string
          description_1: string
          description_2: string | null
          dlc: string
          dream_nail_dialogue: string[] | null
          has_nail_upgrades: boolean | null
          health: string[]
          id: string
          images: string[]
          in_game_events: string | null
          location: string
          lore: string | null
        }
        Insert: {
          boss: string
          created_at?: string
          description_1: string
          description_2?: string | null
          dlc: string
          dream_nail_dialogue?: string[] | null
          has_nail_upgrades?: boolean | null
          health: string[]
          id?: string
          images: string[]
          in_game_events?: string | null
          location: string
          lore?: string | null
        }
        Update: {
          boss?: string
          created_at?: string
          description_1?: string
          description_2?: string | null
          dlc?: string
          dream_nail_dialogue?: string[] | null
          has_nail_upgrades?: boolean | null
          health?: string[]
          id?: string
          images?: string[]
          in_game_events?: string | null
          location?: string
          lore?: string | null
        }
        Relationships: []
      }
      charms: {
        Row: {
          charm: string
          created_at: string
          description_1: string
          description_2: string | null
          effect: string
          how_to_acquire: string
          id: string
          images: string[]
          notches: number | null
          usefulness: string
        }
        Insert: {
          charm: string
          created_at?: string
          description_1: string
          description_2?: string | null
          effect: string
          how_to_acquire: string
          id?: string
          images: string[]
          notches?: number | null
          usefulness: string
        }
        Update: {
          charm?: string
          created_at?: string
          description_1?: string
          description_2?: string | null
          effect?: string
          how_to_acquire?: string
          id?: string
          images?: string[]
          notches?: number | null
          usefulness?: string
        }
        Relationships: []
      }
      enemies: {
        Row: {
          created_at: string
          description_1: string
          description_2: string
          dlc: string
          dream_nail_dialogue: string[] | null
          enemy: string
          health: number
          id: string
          images: string[]
          location: string
        }
        Insert: {
          created_at?: string
          description_1: string
          description_2: string
          dlc?: string
          dream_nail_dialogue?: string[] | null
          enemy: string
          health: number
          id?: string
          images: string[]
          location: string
        }
        Update: {
          created_at?: string
          description_1?: string
          description_2?: string
          dlc?: string
          dream_nail_dialogue?: string[] | null
          enemy?: string
          health?: number
          id?: string
          images?: string[]
          location?: string
        }
        Relationships: []
      }
      items: {
        Row: {
          created_at: string
          description_1: string
          description_2: string | null
          effects: string | null
          how_to_acquire: string[]
          id: string
          images: string[]
          item: string
          type: string | null
          use: string | null
        }
        Insert: {
          created_at?: string
          description_1: string
          description_2?: string | null
          effects?: string | null
          how_to_acquire: string[]
          id?: string
          images: string[]
          item: string
          type?: string | null
          use?: string | null
        }
        Update: {
          created_at?: string
          description_1?: string
          description_2?: string | null
          effects?: string | null
          how_to_acquire?: string[]
          id?: string
          images?: string[]
          item?: string
          type?: string | null
          use?: string | null
        }
        Relationships: []
      }
      nail: {
        Row: {
          created_at: string
          damage: number
          description: string
          id: string
          images: string[]
          nail: string
          upgrade_cost: string
        }
        Insert: {
          created_at?: string
          damage: number
          description: string
          id?: string
          images: string[]
          nail: string
          upgrade_cost: string
        }
        Update: {
          created_at?: string
          damage?: number
          description?: string
          id?: string
          images?: string[]
          nail?: string
          upgrade_cost?: string
        }
        Relationships: []
      }
      npcs: {
        Row: {
          created_at: string
          description: string
          dream_nail_dialogue: string[] | null
          id: string
          images: string[]
          in_game_events: string | null
          location: string
          lore: string | null
          npc: string
          type: string
        }
        Insert: {
          created_at?: string
          description: string
          dream_nail_dialogue?: string[] | null
          id?: string
          images: string[]
          in_game_events?: string | null
          location: string
          lore?: string | null
          npc: string
          type: string
        }
        Update: {
          created_at?: string
          description?: string
          dream_nail_dialogue?: string[] | null
          id?: string
          images?: string[]
          in_game_events?: string | null
          location?: string
          lore?: string | null
          npc?: string
          type?: string
        }
        Relationships: []
      }
      spells_and_abilities: {
        Row: {
          created_at: string
          function: string
          how_to_acquire: string
          id: string
          images: string[]
          inventory_description_1: string
          inventory_description_2: string | null
          modifiers: string[] | null
          name: string
          prompt_description_1: string
          prompt_description_2: string
          type: string
        }
        Insert: {
          created_at?: string
          function: string
          how_to_acquire: string
          id?: string
          images: string[]
          inventory_description_1: string
          inventory_description_2?: string | null
          modifiers?: string[] | null
          name: string
          prompt_description_1: string
          prompt_description_2: string
          type: string
        }
        Update: {
          created_at?: string
          function?: string
          how_to_acquire?: string
          id?: string
          images?: string[]
          inventory_description_1?: string
          inventory_description_2?: string | null
          modifiers?: string[] | null
          name?: string
          prompt_description_1?: string
          prompt_description_2?: string
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
